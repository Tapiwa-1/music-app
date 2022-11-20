<template>
    <TopNavigation/>
    <div class="max-w-4xl mx-auto" id="AccountView">
        <router-view/>
    </div>
 
</template>
<script setup>
import TopNavigation from '@/components/structure/TopNavigation.vue';
</script>
<style lang="scss">

</style>
