<template>
    <div class="" id="Register">
      <div class="h-screen  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-full p-6 flex justify-center items-center">
          <div class="w-full max-w-md">
              <div class="bg-black p-8 shadow rounded mb-6">
                  <h1 class="mb-6 text-lg text-gray-100 font-thin">Lets get rocking</h1>
                  <div class="mb-4">
                    <TextInput label="Email" :labelColor="false" placeholder="example@gmail.com" v-model:input="email" inputType="email" :error="errors.email ?  errors.email[0]:''"/>
                 </div>
                  <div class="mb-4">
                    <TextInput label="Confirm Password" :labelColor="false" placeholder="Password" v-model:input="password" inputType="password" :error="errors.password ?  errors.password[0]:''"/>
                </div>
                <button @click="login" class="block w-full py-3 bg-green-500 text-white rounded-sm text-sm tracking-wide" type="submit">Register</button>

              </div>
              <p class="text-center text-md text-gray-900">Dont have account yet<router-link to="/register" class="text-blue-500 no-underline hover:underline"> Register</router-link> </p>
        
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import TextInput from '@/components/global/TextInput.vue';
  import axios from 'axios';
  import { ref } from '@vue/reactivity';
  import { useUserStore } from '@/store/user-store';

    let email = ref(null);
    let password = ref(null);
    let errors = ref([]);

    const userStore = useUserStore();
    const login = async () =>{
      errors.value = [];

      try{
        let res = await axios.post('api/login',{
          email: email.value,
          password: password.value
        });
        console.log(res);

        userStore.setUserDetails(res);
      }catch(err){
        errors.value = err.response.data.errors
      }
    }
  </script>
  
  <style>
  
  </style>
