<script lang="ts" setup>
  import { ref } from 'vue';
  import { type FormData,contactHandler } from '../api/ContactApi';

  const form = ref({
    name: '',
    email: '',
    message: '',
    date: ''
  })

  const emit = defineEmits(['submit'])

  const submit = async () => {
    form.value.date = new Date().toLocaleString();
    emit('submit', { ...form.value })
    contactHandler(form.value);
  }
</script>

<template>
  <form @submit.prevent="submit">
    <!-- This div is for sizing the inputs and arranging the form items -->
    <div class="form flex flex-col items-center px-6 py-8 mb-4 border rounded-md m-4">
      <div class="mb-4">
        <label class="block" for="name">Name</label>
        <input v-model="form.name" class="w-80 border-2 rounded" type="text" name="name" id="name" placeholder="John Doe" required>
      </div>
  
      <div class="mb-4">
        <label class="block" for="name">Email</label>
        <input v-model="form.email" class="w-80 border-2 rounded" type="email" name="name" id="name" placeholder="email@example.com">
      </div>

      <div class="mb-4">
        <label class="block" for="name">Message</label>
        <textarea 
        v-model="form.message"
        class="w-80 border-2 rounded"
        rows="5"
        cols="33"
        name="message" 
        id="message" 
        maxlength="1000" placeholder= "Enter your message" required/>
      </div>
      
      <div class="justify-self-center ">
        <button type="submit" class="submit-button">
          <span class="flex items-center gap-2">
            Submit
            <i class="pi pi-send"></i>
          </span>
        </button>
      </div>
    </div>
  </form>
</template>