import {defineStore} from 'pinia'

export const useApiStore =defineStore('apiData',{

    state:()=>({data:[],cn:'',searched:'',art:99999}),
    getters:{
        giveme:(state)=>
            {
                return state.data; 
            }
    },
    actions:{
        set(pass){
            this.data=pass;
        }
    }
    
   }
 );