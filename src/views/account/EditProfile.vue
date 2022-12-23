<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb20 px-6">
   <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>
    <CropperModel
      v-if="showModal"
      :minAspectRatioProp="{width: 8, height: 8}"
      :maxAspectRatioProp="{width: 8, height: 8}"
      @croppedImageData="setCroppedImageData"
      @showModal="showModal = false"
    />
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput  label="First Name" :labelColor="true" placeholder="John" v-model:input="firstName"  :error="errors.first_name ?  errors.first_name[0]:''" inputType="text"/>
      </div>
       <div class="w-full md:w-1/2 px-3">
        <TextInput  label="Last Name" :labelColor="true" placeholder="Doe" v-model:input="lastName" :error="errors.last_name ?  errors.last_name[0]:''" inputType="text"/>
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput  label="Location" :labelColor="true" placeholder="Harare Zimbabwe" v-model:input="location" :error="errors.location ?  errors.location[0]:''" inputType="text"/>
      </div>  
    </div>
     <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton @showModal="showModal = true" label="Profile Image" btnText="Update Profile Image"/>
      </div>  
    </div>
     <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <CroppedImage
                    label="Cropped Image"
                    :image="'http://127.0.0.1:8000/images/users/'+ image"
                />
            </div>
        </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full  px-3">
        <TextArea  label="Description" v-model:description="description" :error="errors.description ?  errors.description[0]:''" placeholder="enter data" />
      </div>  
    </div>
    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full  px-3">
        <SubmitFormButton @click="updateUser"  btnText="Submit"/>
      </div>  
    </div>
  </div>

</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import TextInput from '@/components/global/TextInput.vue';
  import TextArea from '@/components/global/DisplayTextArea.vue';
  import DisplayCropperButton from '@/components/global/DisplayCropperButton.vue';
  import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
  import CropperModel from '@/components/global/CropperModel.vue';
  import CroppedImage from '@/components/global/CroppedImage.vue'
  import { useUserStore } from '@/store/user-store';
  import axios from 'axios';
  import { useRouter} from 'vue-router';
  
  let firstName = ref(null);
  let lastName = ref(null);
  let location = ref(null);
  let description = ref(null);
  let imageData = null;
  let image = ref(null);
  let showModal = ref(false);
  let errors = ref([]);

  const userStore = useUserStore();
  const router = useRouter();

  onMounted(() =>{
    firstName.value = userStore.firstName || null;
    lastName.value = userStore.lastName || null;
    location.value = userStore.location || null;
    description.value = userStore.description || null;
    image.value = userStore.image || null;
    
  })

  const setCroppedImageData = (data) =>{
    imageData  = data;
    image.value = data.imageUrl;
  }

  const updateUser = async () =>{

    errors.value = [];

    let data = new FormData();

    data.append('first_name', firstName.value || '' );
    data.append('last_name', lastName.value || '' );
    data.append('location', location.value || '' );
    data.append('description', description.value || '' );

    if(imageData){
      data.append('image', imageData.file || '' );
      data.append('height', imageData.height || '' );
      data.append('width', imageData.width || '' );
      data.append('left', imageData.left || '' );
      data.append('top', imageData.top || '' );
    }
    
    try{
      await axios.post('users/'+ userStore.id +"?_method=PUT", data);

      await userStore.fetchUser();

      router.push('/account/profile');
    }catch(err){
      errors.value = err.response.data.errors;
    }
  }
</script>

<style>

</style>