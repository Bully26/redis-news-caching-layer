<template>
   <NuxtLayout>
     <div
      v-if="show"
      class="fixed top-5 bg-lime-200  px-4 py-2 mx-4 rounded shadow-lg transition-opacity duration-500 text-black" >
      Api response time : {{art}}
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  data(){
       return {
        show:false

       };
  },
  computed:{
    art(){
       return useApiStore().art;
    }
    
  },
  methods:{
    async toast(){
         this.show=true;
         setTimeout(() => {
           this.show=false;
         }, 2000);

    }
  },
  watch:{
    art(newVal)
    {
      this.toast();
    }
  }

  
}
</script>