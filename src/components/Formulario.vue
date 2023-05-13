<script setup lang="ts">
import { ref } from "vue";
 let estado = ref<boolean>(false)
</script>

<template>
    <div :class="{'dark': estado}">
      <div class=" py-16 flex justify-center items-center h-full dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-bold mb-4 text-center dark:text-white">Contacto</h1>
            <p class="text-gray-700 mb-8 text-center dark:text-white">Estamos a la disposicion de servirte!!</p>
            <form class="w-full max-w-md">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label for="name" class="block text-black font-bold text-sm mb-2 dark:text-white">Nombre</label>
                  <input type="text" id="name" name="name" class="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label for="email" class="block text-black font-bold text-sm mb-2 dark:text-white">Correo</label>
                  <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label for="message" class="block text-black font-bold text-sm mb-2 dark:text-white">Mensaje</label>
                  <textarea id="message" name="message" class="w-full h-32 px-4 py-1 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"></textarea>
                </div>
              </div>
              <div class="flex justify-center mt-8">
                <button type="submit" class="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  