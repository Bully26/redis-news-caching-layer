<template>
    <div class="mx-30 bg-white h-[100%] flex relative shadow-amber-100">
        <div class="bg-white w-[70%]">
    
            <div class="w-[100%] h-[2%] align-text-bottom bg-white flex items-center justify-center  text-2xl">
                {{cur_sec.headline}}
            </div>
            <div class="p-6 text-justify">
                <img :src="`https://picsum.photos/seed/${index}/300/200`" class="float-left mr-2" alt="">
                <p>{{cleanBody}}</p>
            </div>
        </div>
    
        <div class="bg-black w-0.5">
    
        </div>
        <div class="w-[35%] text-center">
            <div class="text-xl shadow-inset-amber underline decoration-red-600">
                Latest News
            </div>
    
            <div class="flex items-center justify-center ">
    
                <div class="bg-white h-200 w-full flex flex-col items-center overflow-auto">
                    <div v-for="(item, index) in news__" :key="index" class="mx-3 my-3 h-[40%]">
                        <div @click="changeTopic(item)">
                            <SmallCard :imgsrc="`https://picsum.photos/150/100?${index}`" :title="item.abstract" :head="item.headline"></SmallCard>
                        </div>
    
                    </div>
                </div>
    
            </div>
        </div>
    
    
    </div>
</template>

<script>
import { title } from '@primeuix/themes/aura/card';
import axios from 'axios';
export default {
    data() {
        return {
            cur_news: null,
            items: null,
        };
    },
    methods: {
        async fetchhnews() {
            const startTime = performance.now(); 
            try {
                const response = await axios.get('http://localhost:4000/api?topic=World News');
                const endTime = performance.now();
                useApiStore().art = (endTime - startTime).toFixed(2);
                useApiStore().set(response.data.news);
            } catch (err) {
                alert("ERROR IN DATA FETCHING: SINGLE " + err.message);
            }
        },
        changeTopic(item) {
            this.cur_news = item;
        }
    },
    computed: {
        news__() {
            return useApiStore().giveme;
        },
        cur_sec() {
            if (this.id !== '') return this.cur_news || useApiStore().giveme.find(news => news.headline === this.id);
            else return this.cur_news || useApiStore().giveme[0];



        },
        cleanBody() {
            const body = this.cur_sec.body || '';
            let s = '';
            for (let i = 0; i < body.length; i++) {
                if (body[i] == '<') {
                    i += 2;
                    continue;
                } else {
                    if (body[i] != '>') s += body[i];
                }
            }
            return s;
        },
        id() {
            return useApiStore().cn;
        }
    },
    beforeMount() {
        if (useApiStore().data == 'XXX') this.fetchhnews();
    },
};
</script>
