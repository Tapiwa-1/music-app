<template>
    <div id="CreatePost" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">

        <div class="text-gray-900 text-xl">Create Post</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModel
            v-if="showModal"
            :minAspectRatioProp="{width: 16, height: 9}"
            :maxAspectRatioProp="{width: 16, height: 9}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Title"
                    placeholder="Awesome Concert!!!"
                    v-model:input="title"
                    inputType="text"
                    error="This is an error"
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Location"
                    placeholder="Madrid, ES"
                    v-model:input="location"
                    inputType="text"
                    error="This is an error"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton
                    label="Post Image"
                    btnText="Add Post Image"
                    @showModal="showModal = true"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <CroppedImage
                    label="Cropped Image"
                    :image="image"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <TextArea
                    label="Description"
                    placeholder="Please enter some information here!!!"
                    v-model:description="description"
                    error="This is an error"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Create Post"
                    @submit="createPost"
                />
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue'
     import TextInput from '@/components/global/TextInput.vue';
    import TextArea from '@/components/global/DisplayTextArea.vue';
    import DisplayCropperButton from '@/components/global/DisplayCropperButton.vue';
  import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
  import CropperModel from '@/components/global/CropperModel.vue';
  import CroppedImage from '@/components/global/CroppedImage.vue'

    let showModal = ref(false)
    let title = ref(null)
    let location = ref(null)
    let description = ref(null)
    // let imageData = null
    let image = ref(null)
    // let errors = ref([])

    const setCroppedImageData = (data) => {
        // imageData = data
        image.value = data.imageUrl
    }

   
</script>
