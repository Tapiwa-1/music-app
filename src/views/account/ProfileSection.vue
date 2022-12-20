<template>
  <div class="container max-w-4xl mx-auto flex">
    <div class="w-1/3">
        <img src="https://place-hold.it/500" alt="" class="rounded w-full h-auto shadow-lg">
    </div>
    <div class="w-full pl-4">
        <div class="flex">
            <div class="w-1/2">
                <h1 class="text-2xl md:text-4xl text-left text-gray-900">John Doe</h1>
                <span class="text-md text-gray-700">
                    <i class="text-gray-900"><b>London, UK</b></i>
                </span>
            </div>
            <div class="w-1/2 mt-2 ">
                <RouterLinkButton btnText="Edit Profile" color="green" url="editprofile"/>
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
</script>

<style>

</style>