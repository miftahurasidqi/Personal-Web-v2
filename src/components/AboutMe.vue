<template>
  <section id="about" class="bg-night-200 min-h-screen w-full p-4 pt-8 lg:gap-10 lg:pt-10 flex-col lg:flex-row lg:px-28 text-white overflow-hidden">
    <div class="mt-8 lg:mt-10 mb-5 lg:mb-8 flex justify-center relative">
      <h1 class="text-2xl lg:text-3xl font-semibold">About Me</h1>
      <span class="w-40 h-[2px] absolute -bottom-2 bg-sky-700"></span>
    </div>
    <div class="w-full flex flex-col items-center lg:items-stretch gap-8 px-4 bg-red-10">
      <div class="lg:w-2/3 rounded-lg bg-gradient-to-br from-emerald-500 via-sky-600 via-20% to-indigo-500 hover:bg-gradient-to-bl transition-all p-1" v-motion="montion1">
        <!-- v-motion-slide-visible-left -->
        <div class="bg-night-50 rounded-lg p-6">
          <p class="font-semibold lg:text-xl">
            Hello! My name is Miftahurrofi Asid-Qi, I just finished S1 Information System. I have developed a strong interest in frontend web development. I'm intrigued by how design and functionality work together to create great user
            experiences. I have acquired a solid foundation in
            <span class="font-bold text-blue-400">HTML, CSS </span>and
            <span class="font-bold text-blue-400"> JavaScript</span>
            during my studies, and I am ready to continue learning and growing in this ever-changing industry.
          </p>
        </div>
      </div>
      <div class="lg:w-2/3 rounded-lg bg-gradient-to-tr from-emerald-500 via-sky-600 via-20% to-indigo-500 hover:bg-gradient-to-tl transition-all p-1 lg:ml-96" v-motion="montion2">
        <!-- v-motion-slide-visible-right -->
        <div class="bg-night-50 rounded-lg p-6">
          <p class="font-semibold lg:text-xl">
            I have proficiency in a variety of modern frameworks, including
            <span class="font-bold text-blue-400"> Tailwind CSS, React, </span> and
            <span class="font-bold text-blue-400">Vue.js. </span>
            I believe that using this framework can speed up development and improve the appearance of the site. In addition, I also have experience using
            <span class="font-bold text-blue-400"> Git </span>
            and
            <span class="sr font-bold text-blue-400"> Github </span>

            as collaboration and version management tools.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const montion1 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 400,
    },
  },
};

const montion2 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1050,
    },
  },
};
</script>

<!-- https://brittanychiang.com/#projects -->
<!-- https://dunks1980.com/ -->
<!-- https://github.com/bchiang7 -->
