<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import ResumeButton from '../components/ResumeButton.vue';  

</script>

<template>
  <Navbar />
  <section class=" bg-blue h-screen font-manrope">
    <div class="flex gap-5 m-auto py-16">
      <div class="flex-1 ml-2">
        <h1>John Hines</h1>
      </div>
      <div class="flex-1">
        <ResumeButton />
      </div>
    </div>
  </section>
  <Footer  />
</template>

<style scoped>
  h1{
    color: white;
    font-size: 5rem;
  }
</style>