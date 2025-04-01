<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import logo from '@/assets/img/yb.svg'
  

  const isActiveLink = ((routePath) => {
    const route = useRoute();
    return route.path === routePath;
  })

</script>

<template>
  <!-- ues this commented line for a borderline, but without is more flat mat design -->
  <!-- <nav class="border-b border-[#E59500]"> -->
  <nav>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-16 w-auto" :src="logo" alt="John Hines Logo" />
              <span class="hidden md:block text-[#E59500] text-3xl font-medium ml-2"
                >John Hines
              </span>
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-5 py-3">
                <RouterLink
                  to="/"
                  :class="[isActiveLink('/') ? 'bg-[#840032]' : 'hover:bg-[#E59500] hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
                  >Home
                </RouterLink>
                <RouterLink
                  to="/experience"
                  :class="[isActiveLink('/experience') ? 'bg-[#840032]' : 'hover:bg-[#E59500] hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
                  >Experience
                </RouterLink>
                <RouterLink
                  to="/projects"
                  :class="[isActiveLink('/projects') ? 'bg-[#840032]' : 'hover:bg-[#E59500] hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
                  >Projects & Skills
                </RouterLink>
                <!-- <RouterLink
                  to="/skills"
                  :class="[isActiveLink('/skills') ? 'bg-[#840032]' : 'hover:bg-[#E59500] hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
                  >Skills
                </RouterLink> -->
                <RouterLink
                  to="/about"
                  :class="[isActiveLink('/about') ? 'bg-[#840032]' : 'hover:bg-[#E59500] hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
                  >About
                </RouterLink>
                <RouterLink
                  to="/contact"
                  :class="[isActiveLink('/contact') ? 'bg-[#840032]' : 'hover:bg-[#E59500] hover:text-black', 'text-lg','px-3', 'py-2', 'rounded-md']"
                  >Contact
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>
a {
  color: white;
}
 nav {
  background-color: var(--j-darkblue);
 }
</style>