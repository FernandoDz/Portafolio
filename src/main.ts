import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core' 
import Router from './router'
import {createPinia}  from  'pinia'

const pinia = createPinia()

createApp(App).use(Router).use(pinia).use(VueAnimXyz).mount('#app')


