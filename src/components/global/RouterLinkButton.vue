<template>
    <router-link class="float-right bg-transparent text-gray-900 font-semibold hover:text-white py-2 px-4 hover:border-transparent h border rounded" :color="[color ? 'hover:bg-' + color+ '-500']" :to="url">Edit Profile</router-link>
            
</template>

<script setup>
    import { defineProps, toRefs,  } from 'vue'
    
    const props = defineProps({
        btnText: String,
        url: String,
        color: String
       
    })
    const { btnText, url, color } = toRefs(props)
   
</script>