<script setup lang="ts">
import OhVueIcon from '../plugins/oh-vue-icons';
import { ref } from "vue";
 let estado = ref<boolean>(false)
</script>

<template>
    <div :class="{'dark': estado}">
    <div class="w-auto h-64 p-5 flex flex-col dark:bg-gray-900 justify-center items-center">
  <h3 class="text-lg sm:text-xl md:text-2xl text-black mb-8 text-center dark:text-white">Tecnologias</h3>
  <div class="flex flex-row flex-5 p-3 m-3 justify-center items-center">
    <oh-vue-icon name='la-html5' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='la-css3-alt' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='fa-js' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='co-react' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='co-vue-js' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
  </div>
</div>


    </div>
</template>