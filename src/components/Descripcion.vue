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
            <p class="text-gray-700 mb-8 dark:text-white text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac iaculis libero. </p>
            
            </div>
          </div>
        </div>
      </div>
  </template>  