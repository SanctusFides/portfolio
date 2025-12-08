<script setup>
  import veour from '@/assets/img/veour.png';
  import ViewButton from './ViewButton.vue';
  import VeourButton from './VeourButton.vue';

</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:gap-2 text-center md:text-left md:justify-between basis-1/2
              text-xl border-1 border-jyellow rounded p-6 transition-colors duration-300 hover:bg-jdarkblue">
    <div class="flex flex-col justify-between">
      <div class="flex justify-center">
        <img class="max-h-48 min-w-[259px]" :src="veour" alt="flavour palette web app thumbnail">
      </div>
      <div>
        <h3 class="text-jyellow text-2xl text-center"> Veour </h3>
        <p class="text-base mb-4 text-center">A weather forecast app writen entirely in C# using WPF for the user interface.</p>
        <p class="text-base mb-4 text-center">
          The focus of this project was to gain experience with creating user interface for traditional offline programs and gain
          experience using APIs.
        </p>
      </div>
      <div class="flex justify-center gap-2">
        <VeourButton/>
        <ViewButton title="on Git" url="https://github.com/SanctusFides/VeourC"/>
      </div>
    </div>
  </div>
</template>