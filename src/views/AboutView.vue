<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import image from '@/assets/img/john.jpg';
</script>

<template>
<div class="content flex flex-col h-dvh">
  <Navbar />
  <section class="@container font-manrope text-white grow-1 py-4 lg:py-3">
    <!-- <div class="flex flex-col @lg:flex-row gap-8 lg:gap-0 pt-4 lg:-pt-0 w-full lg:h-full px-32"> -->
    <div class="flex flex-col pt-4 lg:-pt-0 w-full lg:h-full px-4 lg:px-52">
      <div class="flex lg:flex-row justify-between lg:items-end">
        <h1 class="text-6xl lg:text-8xl text-jyellow font-bold">About Me</h1>
        <img class="rounded-full h-32 lg:h-34" :src="image" alt="image of John Hines" />
      </div>
      <div class="flex flex-col gap-3 lg:gap-6 py-4 lg:py-8">
        <p class="text-xl lg:text-3xl">My name is John Hines and I'm from the Houston area. 
          <br>I've been in the tech industry 
          starting from the frontlines of customer support to discovering a passion for writing code.</p>
        <div class="h-1 bg-jyellow"></div>
      </div>
      <div class="flex flex-col gap-3 lg:gap-6">
        <h1 class="text-5xl lg:text-5xl text-jyellow font-bold">A bit more about me...</h1>
        <p class="text-xl">In my free time, I'm often found enjoying video games and keeping up with the latest in the tech world.</p>
        <p class="text-xl">On the weekends you can find me spending my mornings on the couch rooting for my favorite Premier League football club, Chelsea FC. 
            Come night time I'm rooting for the Houston Rockets.</p>
        <p class="text-xl">I'm also a lover of films and equally enjoy a good video essay dissecting movies to fully appreciate the art - or a good 
          breakdown on a why it was such a blunder (shout out to Red Letter Media) 
        </p>
        <div class="h-1 bg-jyellow"></div>
      </div>
      <div class="flex flex-col gap-3 lg:gap-6 py-5">
        <h1 class="text-5xl lg:text-5xl text-jyellow font-bold">A bit more about my work...</h1>
        <p class="text-xl">
          I entered the world of tech by joining a start up created by some friends, being one of the first online ordering platforms for 
          restaurants in the early days of smart phones.
        </p>
        <p class="text-xl">
          What originally started as aiding friends digitize menus to handle the growing customer base, turned into running their customer
          support as a one-man department, performing menu changes and providing customers with best-of practices for their menu needs.
          <br>For our Houston customer base, I would visit restaurants for hardware installation, repairs and met with potential clients to determine if our 
          solutions fit their needs.
        </p>
        <p class="text-xl">
          After 6 years of growth, our team also grew in every department and with this success we caught the eye of Google, who acquired the company
          in 2019 and where we continued our work to provide restaurants with affordable online ordering on a scale we could only dream of. 
        </p>
        <p class="text-xl">
          My time at Google was an incredible experience that introduced me to new technologies and mentors who helped me discover my
          potential and a new passion in programming. I decided that it was the right time to depart the world of support to pursue programming 
          as a full time endeavor.
        </p>
      </div>
    </div>
  </section>
  <Footer />
</div>


</template>

<style>

</style>