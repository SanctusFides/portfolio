<script lang="ts" setup>
  import ContactForm from '../components/ContactForm.vue';
  import Footer from '../components/Footer.vue';
  import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="flex flex-col h-dvh">    
    <Navbar />
    <!-- <section class="content bg-[#002642] h-screen flex flex-col items-center justify-items-center"> -->
    <section class="content font-manrope bg-jblue">
      <!-- container class for positioning the content in the middle and a litle bit down from the top -->
      <div class="container m-auto max-w-2xl pt-8 sm:pt-16">
        <!-- this div is for the forms outter body -->
        <div class="div">
          <h1 class="text-center text-6xl font-semibold mb-6 text-white">Let's Get In Touch</h1>
          <ContactForm />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>

</style>
