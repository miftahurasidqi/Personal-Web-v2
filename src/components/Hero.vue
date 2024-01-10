<template>
  <section id="home" class="min-h-screen w-full flex flex-col gap-2 lg:gap-14 p-4 pt-28 lg:pt-40 lg:flex-row lg:px-28 text-white">
    <div class="w-full lg:w-2/3" v-motion="montion1">
      <h1 class="text-xl lg:text-4xl font-semibold">Hi, I'm Miftahurrofi Asid-Qi</h1>
      <p class="text-sky-600 font-semibold lg:text-2xl">FrontEnd Developer</p>

      <p class="mt-3 lg:mt-5 mb-5 lg:mb-10 font-semibold lg:text-xl">I am a Junior Frontend Web Developer. I believe that every line of code is an opportunity to create engaging digital experiences.</p>
      <a href="#contact" class="p-1 px-2 lg:p-2 lg:px-3 lg:text-xl text-sm border-2 font-semibold text-sky-600 border-sky-600 rounded-md hover:text-white hover:bg-sky-600 transition-all">Download CV</a>
    </div>
    <div class="mx-auto lg:px-3 w-52 lg-full h-1/2 lg:w-1/3" v-motion="montion2">
      <div class="relative">
        <img class="h-full lg:-mt-16 object-cover" src="../assets/images/miftahurrofi.png" alt="" />
        <!-- <div class="absolute -bottom-6 right-[-15%] w-[130%] h-6 bg-night-300 bg-opacity-9 custom-shadow"></div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
const montion1 = {
  initial: {
    opacity: 0,
    x: -70,
    // scale: 0.7,
  },
  enter: {
    opacity: 1,
    x: 0,
    // scale: 1,
    transition: {
      delay: 1000,
      type: "spring",
      stiffness: 150,
      damping: 10,
      mass: 1.5,
    },
  },
};
const montion2 = {
  initial: {
    opacity: 0,
    y: -100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1000,
      type: "spring",
      stiffness: 150,
      damping: 10,
      mass: 1.5,
    },
  },
};
</script>
<!-- <template>
  <div
    v-motion="{
      initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }"
  >
    Hello
  </div>

   OR -->
<!-- 
  <div
    v-motion
    :initial="initial"
    :enter="enter"
  >
    Hello
  </div>
</template> -->
<!-- 
<script setup>
const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({
  y: 0,
  opacity: 1,
})
</script> -->
