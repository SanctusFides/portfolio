<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import FlavourAppBox from '../components/FlavourAppBox.vue';
  import PortfolioAppBox from '../components/PortfolioAppBox.vue'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="content flex flex-col h-dvh">
    <Navbar />
    <section class="@container font-manrope text-white grow-1 py-4 lg:py-3">
      <div class="flex flex-col pt-4 w-full lg:h-full px-4 lg:px-32 mx-auto @3xl:max-w-3/4 @8xl:max-w-2/4">
        <h1 class="text-5xl lg:text-5xl text-jyellow font-bold mb-4">Projects</h1>
        <div class="flex flex-col xl:flex-row gap-6">
          <FlavourAppBox /> 
          <PortfolioAppBox />
        </div>
        <div class="flex flex-col gap-3 lg:gap-6 py-5">
          <h1 class="text-5xl lg:text-5xl text-jyellow font-bold">Work History</h1>
          <div class="pl-3 pb-3 border-b-1 border-jyellow">
            <h2 class="text-xl font-bold text-jyellow">Education Break</h2>
            <h4 class="italic">Mar 2022 - Present</h4>
            <p class="text-xl">
              Pursued a career change into software engineering, during this time I completed a variety of courses and bootcamps focused on Java, Python, and web development, along with the Spring Boot and React frameworks.
              <br>• Bootcamps Completed: 
              <a href="https://www.udemy.com/course/the-complete-java-development-bootcamp/" class="underline hover:text-jyellow">Java</a>, 
              <a href="https://www.udemy.com/course/the-complete-spring-boot-development-bootcamp/" class="underline hover:text-jyellow">Spring Boot</a>,
              <a href="https://www.udemy.com/course/complete-python-bootcamp/" class="underline hover:text-jyellow">Python</a> 
              <br>• Courses Completed: 
              <a href="https://java-programming.mooc.fi/" class="underline hover:text-jyellow">University of Helsinki’s MOOC Java I & II</a>, 
              <a href="https://www.theodinproject.com/" class="underline hover:text-jyellow">The Odin Project</a>, 
              <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" class="underline hover:text-jyellow">Harvard CS50</a>
            </p>
          </div>
          <div class="pl-3 pb-3 border-b-1 border-jyellow">
            <h2 class="text-xl font-bold text-jyellow ">Google</h2>
            <h4 class="italic">July 2019 - Mar 2022</h4>
            <p class="text-xl">
              After 6 years of consistent growth and customer satisfaction, Google acquired The Ordering.app and I was brought along 
              to head the support team; lending my expertise for our merchant and industry needs while continuing to provide service 
              for top performing clients.
            </p>
            <div class="pl-3">
              <ul>
                <li>• Served as lead for a support and onboarding team that grew 875% between July 19, 2019 and June 2, 2021</li>
                <li>• Transitioned flagship integrations to leading point of sale systems (Square & Clover) and provided product and
                  engineering team with client feedback and bug report</li>
                <li>• Provided detailed bug reports with logs and reproduction steps for engineering and tested fixes in sandbox and 
                  production</li>
                <li>• Collected and analyzed AWS server logs affecting users, merchants and the support team</li>
                <li>• Performed internal QA for The Ordering.app’s Play Store application and authored user documentation</li>
              </ul>
            </div>
          </div>
          <div class="pl-3 pb-3 border-jyellow">
            <h2 class="text-xl font-bold text-jyellow ">The Ordering.app</h2>
            <h4 class="italic">Jul 2013 - Jul 2019</h4>
            <p class="text-xl">
              Joined early stage startup as the first dedicated client service position and delivered service industry perspective
              to management and active in road map feedback.
            </p>
            <div class="pl-3">
              <ul>
                <li>• Handled client calls, emails and SMS for quick and critical fixes, and provided in-field installation, service, and
                  training</li>
                <li>• Conducted QA, tracked down and report bugs to engineering, and tested bug fixes in sandbox and production
                  environments</li>
                <li>• Created documentation and video walkthroughs to train support hires to maintain a 92+% customer satisfaction
                  rating</li>
                <li>• Supported The Ordering.app customers through ownership change after the company was acquired by Google
                  in July 2019</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
</div>


</template>

<style>
  .block-link {
      display: block;
  }
</style>