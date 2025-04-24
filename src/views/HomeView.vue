<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import ResumeButton from '../components/ResumeButton.vue';  
  import ContactButton from '../components/ContactButton.vue';

</script>

<template>
  <Navbar />
  <section class="@container bg-jblue h-screen font-manrope text-white flex">
    <div class="flex flex-col @sm:flex-row w-full sm:h-full">
      <div class="flex flex-col justify-center items-center flex-1 gap-3 sm:gap-6">
        <h1 class="text-6xl sm:text-9xl text-jyellow">John Hines</h1>
        <p class="text-2xl sm:text-4xl text-center">Junior Software Engineer</p>
        <p class="text-xl sm:text-2xl">Full-Stack Developer</p>
      </div>
      <div class="flex flex-col gap-8 sm:justify-center items-center flex-1">

        <ResumeButton />
        <ContactButton />
      </div>
    </div>
  </section>
  <Footer  />
</template>
