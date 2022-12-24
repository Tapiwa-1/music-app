<template>
  <div class="py-2 ">
    <p class="text-gray-900 text-lg">
        <b>About Me</b>
    </p>
    <p class="text-md md:text-lg text-gray-600 leading-normal">
      {{ userStore.description }}
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user-store';

const userStore = useUserStore();
</script>

<style>

</style>