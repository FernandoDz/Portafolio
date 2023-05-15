<script setup lang="ts">
import { ref } from "vue";
 let estado = ref<boolean>(false)
</script>


<template>
  <div :class="{'dark': estado}" >
	<div class="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
	  <div class="flex flex-col sm:flex-row items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<img src="../assets/programing.png" alt="Programing" class="w-full max-w-lg mb-8 sm:mb-0 sm:max-w-xl md:max-w-2xl lg:max-w-lg mr-8">
		<div class="text-center sm:text-left">
		  <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 dark:text-white">Hi, I am Jose Diaz</h1>
		  <p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 dark:text-white">Junior Developer</p>
		  <p class="text-gray-700 mb-12 text-justify dark:text-white">Welcome to my portafolio website! I am a passionate developer who loves creating interactive and engaging web applications. I have experience with Vue.js, React, Node.js, and other modern web technologies. Take a look at my projects and let's create something amazing together.</p>
          <a  href="https://github.com/FernandoDz" class="bg-slate-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300">Projects</a>
		</div>
	  </div>
	</div>
</div>

  </template>