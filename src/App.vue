<script setup>
import NavBar from "./components/navbar/NavBar.vue";
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />
  <main class="bg-night-300">
    <Hero />
    <AboutMe />
    <Skills />
    <Portfolio />
    <Contact />
  </main>
  <Footer />
</template>

<!-- 
  - Penjelasan singkat tentang diri kita === tagline
  - Skills => bhs Pemrograman, Framwork, teknologi ? berapa Lama
  - Experience (opsional)
  - Portfolio ss, desk= tskstack, link, peran
  - setifikat
  - blog
  - contact
 -->
