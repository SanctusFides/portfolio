<script setup>

  const downloadResume = () => {
    window.open('/files/JH_CV.pdf', '_blank');
  }

</script>

<template>
  <section>
      <button @click="downloadResume()" class="downloadbbutton bg-jyellow hover:bg-jclaret rounded-md py-[16px] px-[24px]
                                               text-black hover:text-white text-2xl font-bold cursor-pointer">
        Download Resume
      </button>
  </section>
</template>