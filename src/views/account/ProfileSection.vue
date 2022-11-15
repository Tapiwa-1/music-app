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
                    <i><b>London, UK</b></i>
                </span>
            </div>
            <div class="w-1/2 mt-2">
                <router-link class="float-right bg-transparent text-gray-900 font-semibold hover:text-white py-2 px-4 hover:border-transparent hover:bg-green-500 border border-green-500 rounded" to="">Edit Profile</router-link>
            </div>
        </div>
        <ProfileInfoSection/>
        <AboutSection/>
    </div>
  </div>
</template>

<script setup>
import ProfileInfoSection from '@/components/partials/ProfileInfoSection.vue';
import AboutSection from '@/components/partials/AboutSection.vue';
</script>

<style>

</style>