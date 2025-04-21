<script setup>
  import Footer from '../components/Footer.vue';
  import ResumeButton from '../components/ResumeButton.vue';  
</script>

<template>
  <section class=" bg-[#002642] h-screen">
    <div class=" m-auto  py-16">
      <div class="flex gap-5" container>
        <div class="flex-1">
          <h1>John Hines</h1>
        </div>
        <div class="flex-1">
          <ResumeButton />
        </div>
      </div>
    
    </div>
    <Footer  />
  </section>
</template>

<style scoped>
  h1{
    color: white;
    font-size: 5rem;
  }
</style>