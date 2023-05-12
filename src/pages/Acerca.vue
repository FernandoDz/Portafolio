<script setup lang="ts">
import Layout from '../components/layout.vue'
import Footerr from '../components/Footerr.vue'
</script>
<template>
    <layout></layout>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-1">
          <img src="../assets/20230101_151907.jpg"  alt="Profile picture" class="rounded-lg">
        </div>
        <div class="md:col-span-2">
          <h1 class="text-4xl font-bold mb-4">Acerca de mi</h1>
          <p class="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac iaculis libero. </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <i class="fab fa-html5 text-4xl text-gray-700"></i>
              <span class="text-gray-600 mt-2">HTML</span>
            </div>
            <div class="flex flex-col items-center">
              <i class="fab fa-css3-alt text-4xl text-gray-700"></i>
              <span class="text-gray-600 mt-2">CSS</span>
            </div>
            <div class="flex flex-col items-center">
              <i class="fab fa-js-square text-4xl text-gray-700"></i>
              <span class="text-gray-600 mt-2">JavaScript</span>
            </div>
            <div class="flex flex-col items-center">
              <i class="fab fa-vuejs text-4xl text-gray-700"></i>
              <span class="text-gray-600 mt-2">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerr></footerr>    
</template>