<script setup>
import javascript from "../assets/icons/javascript.png";
import tailwind from "../assets/icons/tailwind.png";
import github from "../assets/icons/github.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import Vue from "../assets/icons/Vue.png";

const mySkils = [
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-orange-400",
    src: html,
    name: "HTML",
  },

  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-blue-400",
    src: css,
    name: "CSS",
  },
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-yellow-500",
    src: javascript,
    name: "JavaScript",
  },
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-sky-500",
    src: tailwind,
    name: "Tailwind CSS",
  },
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-blue-500",
    src: react,
    name: "ReactJS",
  },
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-green-700",
    src: Vue,
    name: "VueJS",
  },
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-lime-600",
    src: node,
    name: "NodeJS",
  },
  {
    itemClass: "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
    shadowClass: "shadow-white",
    src: github,
    name: "Github",
  },
];

const montion = {
  initial: {
    opacity: 0,
    // y: 100,
    scale: 0.6,
  },
  // visibleOnce: {
  visible: {
    opacity: 1,
    // y: 0,
    scale: 1,
    transition: {
      duration: 200,
    },
  },
  leave: {
    duration: 200,
    opacity: 0,
    // y: 0,
  },
};
</script>

<template>
  <section id="skils" class="min-h-screen w-full p-4 pt-8 lg:gap-10 lg:pt-12 flex-col lg:flex-row lg:px-28 text-white">
    <div class="mt-8 lg:mt-10 mb-5 lg:mb-8 flex justify-center relative">
      <h1 class="text-2xl lg:text-3xl font-semibold">Skills</h1>
      <span class="w-40 h-[2px] absolute -bottom-2 bg-sky-700"></span>
    </div>
    <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0">
      <div v-for="item in mySkils" :class="[item.itemClass, item.shadowClass]" v-motion="montion">
        <img class="w-20 lg:w-28 mx-auto" :src="item.src" alt="" />
        <p class="mt-4">{{ item.name }}</p>
      </div>
    </div>
  </section>
</template>

<!-- mailto:miftahurasidqi@gmail.com -->
