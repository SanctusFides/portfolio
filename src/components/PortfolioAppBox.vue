<script setup>
  import portfolio from '@/assets/img/portfolio.png';
  import ViewButton from './ViewButton.vue';
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:gap-2 text-center md:text-left md:justify-between basis-1/2
              text-xl border-1 border-jyellow rounded p-6 transition-colors duration-300 hover:bg-jdarkblue">
    <div>
      <h3 class="text-jyellow text-2xl"> Portfolio Website </h3>
      <p class="text-base mb-4">The very page you are on! Designed to be a way for companies to contact me and written in Javascript and 
        using the Vue templating framework. The contact page is using a Netlify serverless function intended to avoid the need and cost of hosting
        an API server for such a simple task. 
      </p>
      <ViewButton title="on Git" url="https://github.com/SanctusFides/portfolio"/>
    </div>
    <div class="flex justify-center md:justify-normal">
      <img class="max-h-48 min-w-[259px] border-1 border-jclaret" :src="portfolio" alt="portfolio website homepage thumbnail">
    </div>
  </div>
</template>