<script setup>
  defineProps({
    title: String,
    url: String
  })
</script>

<template>

  <a :href="url" class="bg-jyellow hover:bg-jclaret rounded-md py-[6px] px-[8px]
                          text-black hover:text-white text-lg font-bold">View {{ title }}</a>
</template>