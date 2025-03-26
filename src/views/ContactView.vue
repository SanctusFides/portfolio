<script setup>

</script>

<template>
  <!-- <section class="content bg-[#002642] h-screen flex flex-col items-center justify-items-center"> -->
  <section class="content bg-[#002642] h-screen">
    <!-- container class for positioning the content in the middle and a litle bit down from the top -->
    <div class="container m-auto max-w-2xl py-16">
      <!-- this div is for the forms outter body -->
      <div class="div">
        <h1 class="text-center">Let's Get In Touch</h1>
        <form>
            <!-- This div is for sizing the inputs and arranging the form items -->
            <div class="div">
              <div>
                <label class="block" for="name">Name</label>
                <input type="text" name="name" id="name">


              </div>
          
              
              <div>
                <button
                  class="font-" 
                  type="submit">Send</button>
              </div>
            </div>
          </form>




      </div>

    </div>
  </section>
</template>

<style scoped>
 * {
  color: white;
 }

 button {
    background-color: var(--j-yellow);
    color: black;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-size: large;
 }
 button:hover {
    background-color: var(--j-claret);
    color: white;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-size: large;
 }
</style>