// stores/counter.js
import axios from 'axios';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    token:null,
    firstName:null,
    lastName:null,
    email:null,
    location:null,
    image: null,
    description: null
  }),
  actions: {
    async setUserDetails(res){
        this.$state.id = res.data.user.id;
        this.$state.token = res.data.token;
        this.$state.firstName = res.data.user.first_name;
        this.$state.lastName = res.data.user.last_name;
        this.$state.email = res.data.user.email;
        this.$state.location = res.data.user.location;
        this.$state.description = res.data.user.description;
        this.$state.image = res.data.user.image;
    },
    async fetchUser(){
        let res = await axios.get('users/'+ this.$state.id);
        this.$state.id = res.data.user.id;
        this.$state.firstName = res.data.user.first_name;
        this.$state.lastName = res.data.user.last_name; 
        this.$state.location = res.data.user.location;
        this.$state.description = res.data.user.description;
        this.$state.image = res.data.user.image;
    },
    clearUser (){
        this.$state.id = null;
        this.$state.firstName = null;
        this.$state.lastName = null; 
        this.$state.location = null;
        this.$state.description = null;
        this.$state.image = null;
    }
  },
  persist: true
})
