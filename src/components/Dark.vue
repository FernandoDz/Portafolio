<script setup lang="ts">
import {useDarkStore} from '../store'
import { storeToRefs } from 'pinia';
const {darkMode} = storeToRefs(useDarkStore())
const {toggleDarkMode}= useDarkStore()
import OhVueIcon from '../plugins/oh-vue-icons';
</script>
<template>
     <button  @click="toggleDarkMode()">
    <oh-vue-icon name='md-dark-mode-outlined' class="ml-2">{{ darkMode ? 'Dark' : 'Light' }}</oh-vue-icon>
  </button>

</template>