<template>
    <div class="" id="Register">
      <div class="w-full p-6 flex justify-center items-center">
          <div class="w-full max-w-xs">
              <div class="bg-black p-8 shadow rounded mb-6">
                  <h1 class="mb-6 text-lg text-gray-100 font-thin">Lets get rocking</h1>
                  <div class="mb-4">
                      <label for="" class="block uppercase tracking-wide text-xs font-xs font-bold mb-2 text-gray-100">First Name</label>
                      <input class="appearance-none block w-full bg-white text-gray-700 bprder border-gray-400 rounded py-3 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="" id="">
                      <span class="text-red-500">
                          This is an error message
                      </span>
                      <button class="block w-full py-3 bg-green-500 text-white rounded-sm text-sm tracking-wide" type="submit">Register</button>
                  </div>
              </div>
              <p class="text-center text-md text-gray-900">Dont have account yet<router-link to="/register" class="text-blue-500 no-underline hover:underline"> Register</router-link> </p>
         
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  
  </style>