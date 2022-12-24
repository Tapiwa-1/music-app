// stores/counter.js
import axios from 'axios';
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () => ({
    songs:null
  }),
  actions: {
  
    async fetchSongsByUserId(userId){
        let res = await axios.get('api/'+ userId+'/songs');
        this.$state.songs = res.data.songs;
     
    },
    clearSongs (){
        this.$state.songs = null;
       
    }
  },
  persist: true
})
