<script lang="ts" setup>
  import { ref } from 'vue';
  import { type FormData,contactHandler } from '../api/ContactApi';

  import { useToast } from 'vue-toastification';
  const toast = useToast();

  const form = ref({
    name: '',
    email: '',
    message: '',
    date: ''
  })

  const emit = defineEmits(['submit'])

  const handleSubmit = async () => {
    // console.log("! Submit Button !");
    
    emit('submit', { ...form.value })
    const response = contactHandler(form.value);
    response.then((res) => {
      // console.log(res.status);
      
      if (res.status == 200) {
        // console.log('back from api');
        toast.success("Message Sent!")
      }
    }).catch((error) =>{
      console.log(error);
      toast.error("Message Unable To Send");
    }) 
    
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <!-- This div is for sizing the inputs and arranging the form items -->
    <div class="form flex flex-col items-center bg-jdarkblue px-6 py-8 mb-4 border border-jyellow rounded-md m-4">
      <div class="mb-4">
        <label class="block text-white" for="name">Name</label>
        <input v-model="form.name" class="w-80 border-2 rounded" type="text" name="name" id="name" placeholder="John Doe" required>
      </div>
  
      <div class="mb-4">
        <label class="block text-white" for="name">Email</label>
        <input v-model="form.email" class="w-80 border-2 rounded" type="email" name="name" id="name" placeholder="email@example.com">
      </div>

      <div class="mb-4">
        <label class="block text-white" for="name">Message</label>
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

<style scoped>

  input, textarea {
    border-color: var(--j-claret);
    padding: 4px;
    box-sizing:border-box;
    background-color: white;
  }


/* Not going to use Tailwind for the submit button - since it has reasons for overlapping of elements that change on hover */
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