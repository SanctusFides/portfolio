<script setup>

  const downloadResume = () => {
    window.open('/files/JH_CV.pdf', '_blank');
  }

</script>

<template>
  <section>
      <button @click="downloadResume()" class="downloadbbutton">
        Download Resume
      </button>
  </section>
</template>

<style scoped>
 button {
    background-color: var(--j-yellow);
    color: black;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-size: large;
 }
 button:hover {
    background-color: var(--j-claret);
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-size: large;
 }
 
</style>