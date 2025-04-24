<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import ResumeButton from '../components/ResumeButton.vue';  
  import ContactButton from '../components/ContactButton.vue';
  import image from '@/assets/img/john.jpg';

</script>

<template>
  <div class="content flex flex-col h-screen">
    <Navbar />
    <section class="@container grow-1 font-manrope text-white">
      <div class="flex flex-col @sm:flex-row gap-8 sm:gap-0 pt-4 sm:-pt-0 w-full sm:h-full">
        <div class="flex flex-col justify-center items-center sm:flex-1 gap-3 sm:gap-6">
          <h1 class="text-6xl sm:text-9xl text-jyellow">John Hines</h1>
          <p class="text-2xl sm:text-4xl text-center">Junior Software Engineer</p>
          <p class="text-xl sm:text-2xl">Full-Stack Developer</p>
        </div>
        <div class="flex flex-col gap-8 sm:justify-center items-center flex-1">
          <img class="rounded-full h-64 sm:h-96" :src="image" alt="image of John Hines" />
          <ResumeButton />
          <ContactButton />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>

</style>
