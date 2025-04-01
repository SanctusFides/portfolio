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
    // emit('submit', { ...form.value })
    form.value.date = new Date().toLocaleString();

    contactHandler(form.value);
  }

</script>

<template>
  <!-- <section class="content bg-[#002642] h-screen flex flex-col items-center justify-items-center"> -->
  <section class="content bg-[#002642] h-screen">
    <!-- container class for positioning the content in the middle and a litle bit down from the top -->
    <div class="container m-auto max-w-2xl py-16">
      <!-- this div is for the forms outter body -->
      <div class="div ">
        <h1 class="text-center text-6xl font-semibold mb-6">Let's Get In Touch</h1>
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




      </div>

    </div>
  </section>
</template>

<style scoped>

  h1, label {
    color: white;
  }

  .form {
    background-color: var(--j-darkblue);
  }

  .div, .form {
    border-color: var(--j-yellow);
  }

  input, textarea {
    border-color: var(--j-claret);
    padding: 4px;
    box-sizing:border-box;
  }

  .pi {
    color: black;
  }


  .submit-button {
    background-color: var(--j-yellow);
    color: black;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-size: large;
  }

  .submit-button:hover {
    background-color: var(--j-claret);
    color: white;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-size: large;
  }
  .submit-button:hover .pi {
    color:white
  }
</style>