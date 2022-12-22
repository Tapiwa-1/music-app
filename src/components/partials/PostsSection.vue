<template>
  <div class="">
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1"></div>
        <div class="w-full mt-4">
      
           <RouterLinkButton btnText="Create Post" color="green" url="/account/create-post"/>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mb-4">
       <div class="my-1 px-2 w-full md:w-1/2 lg:w-1/2">

      <div class="max-w-sm bg-white border  rounded-lg shadow-md ">
          <a href="#">
              <img class="rounded-t-lg" src="https://place-hold.it/500" alt="" />
          </a>
          <div class="p-5 md:p-4">
            <div class="text-lg">
              <router-link to="" class="underline text-blue-500">Text Title</router-link>
            </div>
            <p class="py-2">Location: Text-location</p>
            <p class="text-gray-darker text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi amet eaque! Possimus mollitia exercitationem assumenda nesciunt modi nulla magni quas nihil aliquid omnis recusandae eos vero culpa, expedita veritatis!</p>
            <div class="mt-2 flex items-center justify-end">
                <router-link to="" class="bg-blue-500 hover:text-blue-700 text-white text-sm text-bold py-1 px-2 rounded-full">Edit Post</router-link>
                <button class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded-full">Delete</button>
            </div>
          </div>
      </div>

       </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from '../global/RouterLinkButton.vue';

</script>

<style>

</style>