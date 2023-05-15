import { defineStore } from 'pinia';

export const useDarkStore = defineStore({
  id: 'myStore',
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('class', String(this.darkMode))
    },
  },
});