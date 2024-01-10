<script setup>
import navDropdown from "./navDropdown.vue";
</script>

<template>
  <header class="fixed p-4 py-2 w-full z-50 bg-night-200 bg-opacity-80 shadow-lg lg:px-28">
    <div class="flex justify-between">
      <h1 class="font-sans font-semibold text-2xl text-white lgtext-2xl">Miftahurrofi</h1>
      <nav class="p-2 hidden lg:block">
        <a class="text-white mx-2 p-2 px-5 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-sky-600" href="#home">Home</a>
        <a class="text-white mx-2 p-2 px-5 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-sky-600" href="#about">About</a>
        <a class="text-white mx-2 p-2 px-5 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-sky-600" href="#skils">Skils</a>
        <a class="text-white mx-2 p-2 px-5 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-sky-600" href="#portfolio">Portfolio</a>
        <a class="text-white mx-2 p-2 px-5 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-sky-600" href="#contact">Contact</a>
      </nav>
      <navDropdown />
    </div>
  </header>
</template>
