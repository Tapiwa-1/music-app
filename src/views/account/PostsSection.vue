<template>
    <div class="container mx-auto max-w-4xl py-6 px-3">
        
        <div class="text-gray-900 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>

        <div class="mx-auto">
            <div class="my-4">
                <div class="flex items-center py-2">
                        <img src="https://via.placeholder.com/150" class="rounded-full" width="50">
                    <div class="ml-2 font-bold text-2xl">
                        Name here
                    </div>
                </div>
                <img class="w-full" src="https://via.placeholder.com/1200x800" alt="">
                <div class="p-4">
                    <p class="text-3xl font-bold hover:text-gray-700 pb-4">
                        This is a title
                    </p>
                    <p class="py-2 text-lg">Event Location: Location</p>
                    <p class="pb-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum officiis aspernatur porro nulla magnam nisi excepturi quam ipsa veritatis eaque culpa possimus in, impedit vitae atque quas esse. Quam, tempore?
                    </p>
                </div>
            </div>

            <!-- <div class="flex items-center justify-center p-2">
                <v-pagination
                    class="p-10"
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getPosts"
                />
            </div> -->
        </div>
    </div>
</template>

<script setup>
// import { usePostStore } from '@/store/posts-store';

// const postStore = usePostStore();
</script>
