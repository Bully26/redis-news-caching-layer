<template>
     
    <div>
        <div v-for="item in news" :key="item.id">
            <NewsCard :title="item.headline" :content="item.body" :imgsrc="`https://picsum.photos/300/200?${item.id}`" :id="item.headline" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {};
    },
    mounted() {
        this.fetchdata();
    },
    computed: {
        news() {
            if (useApiStore().data === '') {
                return [];
            } else {

                let search_key = useApiStore().searched;
                return useApiStore().giveme.filter(news =>
                    news.headline.toLowerCase().includes(search_key.toLowerCase())
                );
            }

        }
    },
    methods: {
        async fetchdata() {
            const startTime = performance.now();
            try {
                const response = await axios.get('http://localhost:4000/api?topic=World News');
                const endTime = performance.now();
                useApiStore().art = (endTime - startTime).toFixed(2);
                useApiStore().set(response.data.news);
            } catch (err) {
                alert("ERROR IN DATA FETCHING: " + err.message);
            }
        },
        change() {
            useApiStore().set("ravi chodu");
        }
    }
};
</script>
