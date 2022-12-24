// stores/counter.js
import axios from 'axios';
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () => ({
    artistId:null,
    artistName:null,
    songs:null
  }),
  actions: {
 
    async fetchSongsByUserId(userId){
        let res = await axios.get('api/user/'+ userId+'/songs');
        this.$state.artistId = res.data.artist_id
        this.$state.artistName = res.data.artist_name
        this.$state.songs = res.data.songs;
     
    },
    clearSongs (){
        this.$state.songs = null;
       
    }
  },
  persist: true
})
