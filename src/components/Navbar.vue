<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import logo from '@/assets/img/yb.svg'
  

  const isActiveLink = ((routePath) => {
    const route = useRoute();
    return route.path === routePath;
  })

  function collapse() {
    var x = document.getElementById("navBar");
    if (x.className === "nav small font-manrope bg-jdarkblue border-b border-jyellow px-2 md:px-6 lg:px-8") {
      x.className += " responsive";
    } else {
      x.className = "nav small font-manrope bg-jdarkblue border-b border-jyellow px-2 md:px-6 lg:px-8";
    }
  }

</script>
<!-- Reason for having 2 nav separate navs is that it's easier to swap them out entirely vs having to transform them on the fly  -->
<!-- nav big is reserved for full sized devices -->
<!-- Nav small is used for mobile device sizes, this is designed to be reactive for them -->
<template>
  <nav class="nav big font-manrope bg-jdarkblue w-full">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="mx-auto max-w-7xl  px-2 md:px-6 lg:px-8">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-16 w-auto" :src="logo" alt="John Hines Logo" />
            <span class="hidden md:block text-jyellow text-3xl font-medium ml-2"
              >John Hines
            </span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-5 py-3">
              <RouterLink
                to="/"
                :class="[isActiveLink('/') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-xl', 'px-3', 'py-2', 'rounded-md']"
                >Home
              </RouterLink>
              <RouterLink
                to="/about"
                :class="[isActiveLink('/about') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-xl', 'px-3', 'py-2', 'rounded-md']"
                >About Me
              </RouterLink>
              <RouterLink
                to="/experience"
                :class="[isActiveLink('/experience') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-xl', 'px-3', 'py-2', 'rounded-md']"
                >Work & Experience
              </RouterLink>
              <!-- <RouterLink
                to="/projects"
                :class="[isActiveLink('/projects') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-xl', 'px-3', 'py-2', 'rounded-md']"
                >Projects & Skills
              </RouterLink> -->
              <RouterLink
                to="/contact"
                :class="[isActiveLink('/contact') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-xl','px-3', 'py-2', 'rounded-md']"
                >Contact
              </RouterLink>
              <a href="javascript:void(0);" class="icon px-3 py-2" @click="collapse()">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  </nav>
  <nav class="nav small font-manrope bg-jdarkblue border-b border-jyellow px-2 md:px-6 lg:px-8" id="navBar">
    <div class="flex">
      <RouterLink class="mr-4" to="/">
        <img class="h-16 w-auto" :src="logo" alt="John Hines Logo" />
        <span class="hidden md:block text-jyellow text-3xl font-medium ml-2"
          >John Hines
        </span>
      </RouterLink>
      <div class=" py-5">
        <RouterLink
          to="/"
          :class="[isActiveLink('/') ? 'bg-jclaret text-white home' : 'text-white hover:bg-jyellow home hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
          >Home
        </RouterLink>
        <RouterLink
          to="/about"
          :class="[isActiveLink('/about') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
          >About Me
        </RouterLink>
        <RouterLink
          to="/experience"
          :class="[isActiveLink('/experience') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-lg', 'px-3', 'py-2', 'rounded-md']"
          >Work & Experience
        </RouterLink>
        <RouterLink
          to="/contact"
          :class="[isActiveLink('/contact') ? 'bg-jclaret text-white' : 'text-white hover:bg-jyellow hover:text-black', 'text-lg','px-3', 'py-2', 'rounded-md']"
          >Contact
        </RouterLink>
        <a href="javascript:void(0);" class="icon px-8 py-3" @click="collapse()">
         <i class="fa fa-bars text-jyellow"></i>
        </a>
      </div>
    </div>
    </nav>
</template>

<style scoped>
  .nav .icon {
    display: none;
  }

  .icon {
    font-size: xx-large;
    position: absolute;
    right: 0;
    top: 0;
  }
  .small {
    display:none;
  }


/* When the screen is less than 600 pixels wide */
@media screen and (max-width: 600px) {
  .nav a:not(:first-child) {
    display: none;
  }
  .nav a.icon {
    float: right;
    display: block;
  }
  .small {
    display: block;
  }
  .big {
    display: none;
  }
}

/* The "responsive" class is added to the nav with JavaScript when the user clicks on the icon. */
@media screen and (max-width: 600px) {
  .nav.responsive {position: relative;}
  .nav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .nav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>