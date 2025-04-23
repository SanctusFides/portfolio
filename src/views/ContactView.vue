<script lang="ts" setup>
  import ContactForm from '../components/ContactForm.vue';
  import Footer from '../components/Footer.vue';
  import Navbar from '../components/Navbar.vue';
</script>

<template>
  <Navbar />

  <!-- <section class="content bg-[#002642] h-screen flex flex-col items-center justify-items-center"> -->
  <section class="content font-manrope bg-blue h-screen">
    <!-- container class for positioning the content in the middle and a litle bit down from the top -->
    <div class="container m-auto max-w-2xl py-16">
      <!-- this div is for the forms outter body -->
      <div class="div ">
        <h1 class="text-center text-6xl font-semibold mb-6">Let's Get In Touch</h1>
        <ContactForm />
      </div>
    </div>
  </section>
  <Footer />
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