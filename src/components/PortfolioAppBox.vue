<script setup>
  import flavour from '@/assets/img/flavourpalette.png';
  import ViewButton from './ViewButton.vue';
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:gap-2 text-center md:text-left md:justify-between 
              text-xl border-1 border-jyellow rounded p-6 transition-colors duration-300 hover:bg-jdarkblue">
    <div>
      <h3 class="text-jyellow text-2xl"> Flavour Palette </h3>
      <p class="text-base">Java & Spring Boot web app that allows users to search, create, favorite and rate recipes.</p>
      <p class="text-base">SQL is used to store recipes, including ingredients and steps.</p>
      <p class="text-base">Users can signup via email or login with Google using OAuth2</p>
    </div>
    <div class="flex justify-center md:justify-normal">
      <img class="max-h-48 min-w-[259px]" :src="flavour" alt="flavour palette web app thumbnail">
    </div>
  </div>
</template>