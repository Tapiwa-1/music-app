<template>
  <div class="container max-w-4xl mx-auto flex">
    <div class="w-1/3">
        <img :src="profileStore.image" alt="" class="rounded w-full h-auto shadow-lg">
        
    </div>
    <div class="w-full pl-4">
        <div class="flex">
            <div class="w-1/2">
                <h1 class="text-2xl md:text-4xl text-left text-gray-900">{{ profileStore.firstName }} {{ profileStore.lastName }}</h1>
                <span class="text-md text-gray-700">
                    <i class="text-gray-900"><b>{{ profileStore.location }}</b></i>
                </span>
            </div>
            <div class="w-1/2 mt-2 " v-if="userStore.id == route.params.id">
                <RouterLinkButton btnText="Edit Profile" color="green" url="edit-profile"/>
            </div>
        </div>
        <ProfileInfoSection/>
        <AboutSection/>
    </div>
  </div>
  <SongsSection/>
  <YoutubeVideoSection/>
  <PostsSection/>
</template>

<script setup>
import ProfileInfoSection from '@/components/partials/ProfileInfoSection.vue';
import AboutSection from '@/components/partials/AboutSection.vue';
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
import SongsSection from '@/components/partials/SongsSection.vue';
import YoutubeVideoSection from '@/components/partials/YoutubeVideoSection.vue';
import PostsSection from '@/components/partials/PostsSection.vue';
import { useUserStore } from '@/store/user-store';
import { useProfileStore} from '@/store/profile-store';
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const profileStore = useProfileStore();
const route = useRoute();
onMounted( async () =>{
    await profileStore.fetchProfileById(route.params.id);
})
</script>

<style>

</style>