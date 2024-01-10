<script setup>
import github from "../assets/icons-svg/github.vue";
import instagram from "../assets/icons-svg/instagram.vue";
import linkedin from "../assets/icons-svg/linkedin.vue";

const date = new Date();
const year = date.getFullYear();
</script>

<template>
  <footer class="bg-night-500 pt-10 pb-10">
    <!-- <footer class="bg-night-100 pt-10 pb-10"> -->
    <div class="">
      <div class="flex items-center justify-center mb-5">
        <a
          href="https://github.com/miftahurasidqi"
          target="_blank"
          class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-secondary dark:border-slate-300 dark:text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          <github />
        </a>
        <a
          href="https://www.linkedin.com/in/miftahurasidqi/"
          target="_blank"
          class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-secondary dark:border-slate-300 dark:text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          <linkedin />
        </a>

        <a
          href="https://www.instagram.com/miftahurrogi_09/"
          target="_blank"
          class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-secondary dark:border-slate-300 dark:text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          <instagram />
        </a>
      </div>
      <div class="w-full pt-5 border-t border-slate-700">
        <p class="font-medium text-sm text-slate-500 text-center">&copy; Copyright <a href="#home" class="font-bold text-primary text-base">Miftahur Asid-Qi</a> {{ year }}</p>
        <h1 class="text-slate-500 text-center">Made With VueJS</h1>
      </div>
    </div>
  </footer>
</template>
