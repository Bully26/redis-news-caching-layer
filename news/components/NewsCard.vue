<template>
   
    <div class="bg-white shadow-md mb-1 overflow-hidden p-6 hover:shadow-lg transition flex flex-row">
        <img :src="imgsrc" class="mr-7" alt="">
        <div>
    
    
            <h2 class="text-xl font-semibold text-black mb-2">
                {{ title }}
            </h2>
            <p class=" text-black text-sm leading-relaxed mb-4">
                {{ plainPreview }}
            </p>
            <NuxtLink to="/Single" @click="setNewsID(this.id)" >
                <div href="#" class="text-blue-500 hover:underline text-sm font-medium" >
                    Read more
                </div>
            </NuxtLink>
    
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        imgsrc: {
            type: String,
        },
        id:{
          type:String
        }
    },
    computed: {
        plainPreview() {
            const div = document.createElement("div");
            div.innerHTML = this.content;
            const text = div.textContent || div.innerText || "";
            return text.length > 600 ? text.slice(0, 600) + "..." : text;
        }
    },
    methods:{
      setNewsID(val){
         useApiStore().cn=val;
      }
    }
};
</script>
