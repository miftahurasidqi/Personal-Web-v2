<script setup>
import hamburger from "../../assets/icons-svg/hamburger.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<template>
  <Menu as="div" class="relative inline-block lg:hidden">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-3 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <hamburger />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems as="nav" class="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-900 p-2 rounded-md bg-night-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <!-- <MenuItems as="nav" class="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-900 p-2 rounded-md bg-black bg-opacity-40 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> -->
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <a href="#home" :class="[active ? 'bg-white bg-opacity-5 hover:text-sky-600' : '', 'group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm text-white']">
              <p>Home</p>
            </a>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <a href="#about" :class="[active ? 'bg-white bg-opacity-5 hover:text-sky-600' : '', 'group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm text-white']">
              <p>About</p>
            </a>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <a href="#skils" :class="[active ? 'bg-white bg-opacity-5 hover:text-sky-600' : '', 'group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm text-white']">
              <p>Skils</p>
            </a>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <a href="#portfolio" :class="[active ? 'bg-white bg-opacity-5 hover:text-sky-600' : '', 'group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm text-white']">
              <p>Portfolio</p>
            </a>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <a href="#contact" :class="[active ? 'bg-white bg-opacity-5 hover:text-sky-600' : '', 'group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm text-white']">
              <p>Contact</p>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
