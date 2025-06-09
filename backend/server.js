import express from 'express';
import axios from 'axios';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client= await createClient()
.on('error',(err)=>console.log('Redis client error',err))
.connect();


app.get('/api', async (req, res) => {
  try {
    const keyword= req.query.topic || 'sport';
    
    const redis_key='api:topic='+keyword;
    const redis_data = await client.get(redis_key);

    if(redis_data){
        console.log('cache hit__',redis_key);
        res.send(JSON.parse(redis_data));
        return;
    }
    const data = await axios.get(`https://fakenews.squirro.com/news/${keyword}`);
     
    console.log('cache miss__',redis_key);

    await client.set(redis_key,JSON.stringify(data.data), {
            EX: 10,     
            NX: true,
            KEEPTTL: false
            });

    res.json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
