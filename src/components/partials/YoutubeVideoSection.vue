<template>
  <div class="">
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">YouTube Videos</div>
        <div class="bg-green-500 w-full h-1"></div>
        <div class="w-full mt-4">
          <RouterLinkButton class="ml-2" btnText="Delete YouTube Video" color="red" url="/account/delete-youtube-video"/>
           <RouterLinkButton btnText="Add YouTube Video" color="green" url="/account/add-youtube-video"/>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mb-4">
       <div class="my-1 px-2 w-full md:w-1/2 lg:w-1/2">
          <div class="text-lg text-gray-900">Video Title</div>
          <iframe src="https://www.youtube-nocookie.com/embed/IbF6VZM-NLI?rel=0&amp;controls=0&amp;showinfo=0" class="w-full h-60"></iframe>
       </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from '../global/RouterLinkButton.vue';

</script>

<style>

</style>