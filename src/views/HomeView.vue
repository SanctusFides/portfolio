<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import ResumeButton from '../components/ResumeButton.vue';  

</script>

<template>
  <Navbar />
  <section class="@container bg-blue h-screen font-manrope text-white flex">
    <div class="flex flex-col @sm:flex-row w-full @sm:h-full py-16">
      <div class="flex flex-col justify-center items-center flex-1 ml-2 gap-3">
        <h1 class="text-6xl">John Hines</h1>
        <p class="text-xl">Junior Software Engineer</p>
        <p>Full-Stack Developer</p>
      </div>
      <div class="flex justify-center items-center flex-1">
        <ResumeButton />
        <h2></h2>
      </div>
    </div>
  </section>
  <Footer  />
</template>

<style scoped>
  h1{
    /* font-size: 5rem; */
  }
</style>