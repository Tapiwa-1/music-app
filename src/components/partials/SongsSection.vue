<template>
  <div class="">
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Songs</div>
        <div class="bg-green-500 w-full h-1"></div>
        <div class="w-full mt-4" v-if="userStore.id == route.params.id">
          <RouterLinkButton class="ml-2" btnText="Delete Song" color="red" url="/account/delete-song"/>
           <RouterLinkButton btnText="Add Song" color="green" url="/account/add-song"/>
        </div>
      </div>
    </div>
    <div class="pb-4">
       <SongPlayer/>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from '../global/RouterLinkButton.vue';
import SongPlayer from './SongPlayer.vue';
import { useRoute } from 'vue-router';

import { useUserStore } from '@/store/user-store'
import { useSongStore } from '@/store/song-store'
import { onMounted } from '@vue/runtime-core';

const userStore = useUserStore();
const route = useRoute();
const songStore = useSongStore();

onMounted( async ()=>{
  await songStore.fetchSongById(route.params.id);
})
</script>

<style>

</style>