<template>
  <div class="" id="Register">
    <div class=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-full p-6 flex justify-center items-center">
        <div class="w-full max-w-md">
            <div class="bg-black  p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-gray-100 font-thin">Lets get rocking</h1>
                <div class="mb-4">
                    <TextInput label="First Name" :labelColor="false" placeholder="John" v-model:input="firstName" inputType="Text" error="This is a text error"/>
                </div>
                <div class="mb-4">
                    <TextInput label="Last Name" :labelColor="false" placeholder="Doe" v-model:input="lastName" inputType="Text" error="This is a text error"/>
                </div>
                <div class="mb-4">
                    <TextInput label="Email" :labelColor="false" placeholder="example@gmail.com" v-model:input="email" inputType="email" error="This is a text error"/>
                 </div>
                <div class="mb-4">
                    <TextInput label="Password" :labelColor="false" placeholder="Password" v-model:input="password" inputType="password" error="This is a text error"/>
                </div>
                 <div class="mb-4">
                    <TextInput label="Confirm Password" :labelColor="false" placeholder="Password" v-model:input="confirmPassword" inputType="password" error="This is a text error"/>
                </div>
                <button class="block w-full py-3 bg-green-500 text-white rounded-sm text-sm tracking-wide" type="submit">Register</button>

            </div>
            <p class="text-center text-md text-gray-900">Already have an account <router-link to="/login" class="text-blue-500 no-underline hover:underline"> Login</router-link> </p>
        
        </div>
    </div>
  </div>
</template>

<script setup>
import TextInput from '@/components/global/TextInput.vue';
import { ref } from '@vue/reactivity';

let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
</script>

<style>

</style>