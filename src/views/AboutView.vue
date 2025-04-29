<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import image from '@/assets/img/john.jpg';
</script>

<template>
<div class="content flex flex-col h-dvh">
  <Navbar />
  <section class="@container font-manrope text-white grow-1 py-4 lg:py-12">
    <!-- <div class="flex flex-col @lg:flex-row gap-8 lg:gap-0 pt-4 lg:-pt-0 w-full lg:h-full px-32"> -->
    <div class="flex flex-col pt-4 lg:-pt-0 w-full lg:h-full px-4 lg:px-52">
      <div class="flex lg:flex-row justify-between lg:items-end">
        <h1 class="text-6xl lg:text-8xl text-jyellow font-bold">About Me</h1>
        <img class="rounded-full h-32 lg:h-38" :src="image" alt="image of John Hines" />
      </div>
      <div class="flex flex-col gap-3 lg:gap-6 py-4 lg:py-8">
        <p class="text-2xl lg:text-4xl">My name is John and I'm from the Houston area. 
          <br>I've been in the tech industry 
          starting from the frontlines with customer support and now have a passion for writing code.</p>
        <div class="h-1 bg-jyellow"></div>
      </div>
      <div class="flex flex-col gap-3 lg:gap-6">
        <h1 class="text-5xl lg:text-5xl text-jyellow font-bold">A bit more about me...</h1>
        <p></p>
      </div>
    </div>
  </section>
  <Footer />
</div>


</template>

<style>

</style>