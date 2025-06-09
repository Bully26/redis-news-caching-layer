<template>
  <div class="bg-white shadow-md w-full">
    <nav class="flex items-center justify-between px-4 py-2">
      <div class="flex space-x-4">
        <div
          v-for="item in items"
          :key="item.label"
          @click="changeTopic(item.label)"
          :class="onme(item.label)"
          class="relative group cursor-pointer px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100 active:bg-blue-200"
        >
          <span class="text-slate-600 group-hover:text-blue-600 font-medium">{{ item.label }}</span>
       
        </div>
      </div>

      <div class="ml-auto">
        <input
          v-model="search_key"
          type="text"
          placeholder="Search"
          class="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [
        { label: 'World News' },
        { label: 'Sport' },
        { label: 'Finance' },
        { label: 'Technology' },
        { label: 'Entertainment' },
      ],
      search_key: '',
      cur_state:'World News'
    };
  },
  methods: {
    async changeTopic(label) {
        this.cur_state=label;
        const startTime = performance.now(); 
        const response= await axios.get('http://localhost:4000/api?topic='+label);
        try{
            const endTime = performance.now();
            useApiStore().art=(endTime - startTime).toFixed(2);
            useApiStore().set(response.data.news);

        }catch(err){
            alert(err);
        }
      
    },
    onme(label){
        if(label==this.cur_state)
        {
            return 'underline undeline-1 decoration-slate-500'
        }
 
    }
  },
  watch:{
    search_key(ne){
        useApiStore().searched=ne;
    }
  }
};
</script>
