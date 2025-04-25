<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import ResumeButton from '../components/ResumeButton.vue';  
  import ContactButton from '../components/ContactButton.vue';
  import image from '@/assets/img/john.jpg';
</script>

<template>
  <div class="content flex flex-col h-dvh">
    <Navbar />
    <section class="@container font-manrope text-white grow-1">
      <div class="flex flex-col @lg:flex-row gap-8 lg:gap-0 pt-4 lg:-pt-0 w-full lg:h-full">
        <div class="flex flex-col justify-center items-center lg:flex-1 gap-3 lg:gap-6">
          <h1 class="text-6xl lg:text-9xl text-jyellow text-center">John Hines</h1>
          <p class="text-2xl lg:text-4xl text-center">Junior Software Engineer</p>
          <p class="text-xl lg:text-2xl">Full-Stack Developer</p>
        </div>
        <div class="flex flex-col gap-8 lg:justify-center items-center flex-1">
          <img class="rounded-full h-64 lg:h-96" :src="image" alt="image of John Hines" />
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
