<template>
<div class="h-full" @mouseenter="onme=true" @mouseleave="onme=false">
        <h1 class="text-left" :class="onme?'underline decoration-sky-400':''">{{head}}</h1>
        <img :src="imgsrc" class="float-left mr-2 rounded-sm" alt="">
        <p class="text-xs text-justify">{{title}}</p>
</div>
 <hr class="mt-2 h-0.5 bg-slate-200 border-0 w-[100%]">
</template>
<script>
export default{
    data(){
        return{
            onme:false

        };
    },
    props:{
        imgsrc:{
            type: String,
            required:true
        },
        title:{
            type: String,
            required:true
        },
        head:{
            type:String,
            required:true
        }

    },
    
};
</script>