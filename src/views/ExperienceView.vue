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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="text-xl border-1 border-jyellow rounded p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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