<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import FlavourAppBox from '../components/FlavourAppBox.vue';
  import PortfolioAppBox from '../components/PortfolioAppBox.vue'

  const flavUrl = 'https://github.com/SanctusFides/Flavour-Palette-Public';
  function visitURL(url) {
    console.log("being clicked");
  
    window.location.href = url;
  }

</script>

<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div class="content flex flex-col h-dvh">
  <Navbar />
  <section class="@container font-manrope text-white grow-1 py-4 lg:py-3 mx-auto w-full xl:max-w-3/4">
    <div class="flex flex-col pt-4 lg:-pt-0 w-full lg:h-full px-4 pt-8 md:pt-16 ">
      <h1 class="text-5xl lg:text-5xl text-jyellow font-bold mb-4">Projects</h1>
      <div class="flex flex-col 2xl:flex-row gap-6">
        <FlavourAppBox /> 
        <PortfolioAppBox />
      </div>

      <div class="flex flex-col gap-3 lg:gap-6 py-5">
        <h1 class="text-5xl lg:text-5xl text-jyellow font-bold">Work History</h1>
        <p class="text-xl border-1 border-jyellow rounded p-3">
          I entered the world of tech by joining a start up created by some friends, being one of the first online ordering platforms for 
          restaurants in the early days of smart phones.
        </p>
        <p class="text-xl border-1 border-jyellow rounded p-3">
          What originally started as aiding friends digitize menus to handle the growing customer base, turned into running their customer
          support as a one-man department, performing menu changes and providing customers with best-of practices for their menu needs.
          <br>For our Houston customer base, I would visit restaurants for hardware installation, repairs and met with potential clients to determine if our 
          solutions fit their needs.
        </p>
        <p class="text-xl border-1 border-jyellow rounded p-3">
          After 6 years of growth, our team also grew in every department and with this success we caught the eye of Google, who acquired the company
          in 2019 and where we continued our work to provide restaurants with affordable online ordering on a scale we could only dream of. 
        </p>
        <p class="text-xl border-1 border-jyellow rounded p-3">
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
  .block-link {
      display: block;
  }
</style>