<script setup lang="ts">
import { ref } from "vue";
 let estado = ref<boolean>(false)
</script>
<template>
    <div :class="{'dark': estado}" >
      <div class="h-full w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 dark:bg-gray-900">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div class="md:col-span-1 flex justify-center">
            <img src="../assets/profile.png"  alt="Profile picture" class="rounded-lg max-h-full">
          </div>
          <div class="md:col-span-2">
            <h1 class="text-4xl font-bold mb-4 dark:text-white text-center md:text-left">Acerca de mi</h1>
            <p class="text-gray-700 mb-8 dark:text-white text-center md:text-left">As a software development student, I have demonstrated a deep understanding of fundamental programming concepts and gained experience in various languages and technologies. My innate curiosity and eagerness to learn have kept me up-to-date with the latest trends in software development, and I am always seeking opportunities to expand my knowledge and skills.

In addition, my passion for music has been an integral part of my life for the past eight years. Throughout my journey as a musician, I have explored different styles and genres, which has enriched my artistic perspective. Whether playing an instrument or composing captivating melodies, I have shown great musical dexterity and a keen ear for harmony and melody.

The combination of my software development skills and music experience provides me with a unique and creative perspective. I am capable of approaching challenges innovatively, applying analytical thinking and a meticulous approach to software development projects.</p>
            
            </div>
          </div>
        </div>
      </div>
  </template>  