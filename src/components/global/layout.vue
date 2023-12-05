<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Díaz</span>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <Router-link to="/" class="text-sm font-semibold leading-6 text-gray-900">Home</Router-link>
          <Router-link to="/about" class="text-sm font-semibold leading-6 text-gray-900">About</Router-link>
          <Router-link to="/projects" class="text-sm font-semibold leading-6 text-gray-900">Projects</Router-link>
          <Router-link to="/contact" class="text-sm font-semibold leading-6 text-gray-900">Contact</Router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download
            CV</button>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Router-link to="/"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Router-link>
                <Router-link to="/about"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Router-link>
                <Router-link to="/contact"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</Router-link>
                <Router-link to="/projects"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Projects</Router-link>
              </div>
              <div class="py-6">
                <a href="https://drive.google.com/file/d/1BRMjYbKrnicoByqlc7TCDgrG3TRgk9sb/view?usp=sharing"
                  target="_blank"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Download CV
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <slot />


    <footer class="mt-auto bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">

          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Projects</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#"
            class="hover:underline"></a>. All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>

