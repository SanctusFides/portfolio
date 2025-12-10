<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import LinkedInButton from '../components/LinkedInButton.vue';  
  import ResumeButton from '../components/ResumeButton.vue';  
  import ContactButton from '../components/ContactButton.vue';
  import image from '@/assets/img/john.jpg';
</script>

<template>
  <div class="content flex flex-col h-dvh">
    <Navbar />
    <section class="@container font-manrope text-white grow-1 ">
      <div class="flex flex-col @xl:flex-row gap-8 lg:gap-0 pt-4 md:pt-8 lg:pt-0 w-full h-full 2xl:max-w-3/4 mx-auto  @8xl:max-w-2/4">
        <div class="flex flex-col justify-center items-center flex-1 gap-3 lg:gap-6">
          <h1 class="text-6xl sm:text-9xl text-jyellow text-center">John Hines</h1>
          <p class="text-2xl lg:text-4xl text-center">Junior Software Engineer</p>
          <p class="text-xl lg:text-2xl">Full-Stack Developer</p>
        </div>
        <div class="flex flex-col gap-8 justify-center items-center flex-1">
          <img class="rounded-full h-64 lg:h-96" :src="image" alt="image of John Hines" />
          <LinkedInButton />
          <ResumeButton />
          <ContactButton class="mt-4"/>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>

</style>
