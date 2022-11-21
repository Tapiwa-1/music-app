<template>
    <TopNavigation/>
    <div class="max-w-4xl mx-auto" id="AccountView">
        <router-view/>
    </div>
    <FooterSection/>
</template>
<script setup>
import TopNavigation from '@/components/structure/TopNavigation.vue';
import FooterSection from '@/components/structure/FooterSection.vue';
</script>
<style lang="scss">

</style>
