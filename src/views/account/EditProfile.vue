<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb20 px-6">
   <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput  label="First Name" :labelColor="true" placeholder="John" v-model:input="firstname" inputType="text" error="This is a text error"/>
      </div>
       <div class="w-full md:w-1/2 px-3">
        <TextInput  label="Last Name" :labelColor="true" placeholder="Doe" v-model:input="lastname" inputType="text" error="This is a text error"/>
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput  label="Location" :labelColor="true" placeholder="Harare Zimbabwe" v-model:input="location" inputType="text" error="This is a text error"/>
      </div>  
    </div>
     <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton label="Profile Image" btnText="Update Profile Image"/>
      </div>  
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextArea  label="Description" v-model="description" placeholder="enter data"  error="This is a text error"/>
      </div>  
    </div>
  </div>

</template>

<script setup>
  import { ref } from 'vue';
  import TextInput from '@/components/global/TextInput.vue';
    import TextArea from '@/components/global/DisplayTextArea.vue';
  import DisplayCropperButton from '@/components/global/DisplayCropperButton.vue';
  
  let firstname = ref(null);
  let lastname = ref(null);
  let location = ref(null);
  let description = ref(null);
</script>

<style>

</style>