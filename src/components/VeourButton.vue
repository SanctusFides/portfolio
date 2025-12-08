<script setup>
  const downloadVeour = () => {
    window.open('/files/Veour.zip', '_blank');
  }
</script>

<template>

      <button @click="downloadVeour()" class="bg-jyellow hover:bg-jclaret rounded-md py-[6px] px-[8px]
                          text-black hover:text-white text-lg font-bold">
        Download
      </button>
</template>