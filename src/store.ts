import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'myStore',
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});