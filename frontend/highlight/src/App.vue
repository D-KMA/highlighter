<template>
<!-- eslint-disable max-len -->
  <div id="nav" class="bg-white">
    <!-- start of top nav -->
    <div class="w-full bg-teal-200">
      <nav id="topNav" class="py-6 w-11/12 mx-auto flex flex-col items-center sm:flex-row md:justify-between">
        <!-- logo -->
        <div class="flex-initial md:flex-1 mb-4 sm:mb-0">
          <h1 class="font-black text-xl text-black tracking-tight">JustHighlight</h1>
        </div>
        <!-- doc and social -->
        <div class="flex-1 flex justify-end divide-x divide-gray-500">
          <div
            class="flex-initial flex place-items-center space-x-2 px-3 text-gray-500">
            <i class="fas fa-tag text-md"></i>
            <span class="font-bold text-sm">Version 1.0.1</span>
          </div>
          <div class="flex-initial flex px-3">
            <!-- router links to docs and home -->
            <div class="group hover:bg-white transition duration-500 rounded-lg">
              <router-link
                v-if="routePath === '/home'"
                :to="{name: 'Docs'}"
                :class="'flex px-2 py-1 justify-center items-center space-x-2'">
                  <i class="fab fa-readme text-md text-gray-500 group-hover:text-pink-500 transition duration-500"></i>
                  <span class="font-semibold text-base text-gray-900">Docs</span>
              </router-link>
              <router-link v-else :to="{name: 'Home'}" class="font-semibold text-base text-gray-900 px-2 py-1">Home</router-link>
            </div>
            <!-- end of router links -->
            <div class="flex-initial flex place-items-center space-x-3 ml-3">
              <a href="https://github.com/KMA-USS" target="_blank" class="text-gray-500 hover:text-pink-500">
                <i class="fab fa-github text-md"></i>
              </a>
              <a href="https://twitter.com/DBlackerMan" target="_blank" class="text-gray-500 hover:text-pink-500">
                <i class="fab fa-twitter text-md"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- end of top nav -->
    <!-- start of router view -->
    <router-view />
    <!-- start of footer -->
    <footer class="flex justify-between w-11/12 mx-auto mb-4">
      <div>
        <span class="text-xs font-semibold text-gray-500">JustHighlight</span>
        <i class="fas fa-copyright text-xs text-gray-900 ml-2 mr-1"></i>
        <span class="text-xs font-semibold text-gray-500">2020</span>
        <span class="text-xs font-medium text-gray-400 ml-3">All Rights Reserved</span>
      </div>
      <div>
        <span class="text-xs text-gray-500 font-semibold">Aces & Coup inc.</span>
      </div>
    </footer>
  </div>
  <!-- end of footer -->
</template>

<script>
import './assets/styles/tailwindstyled.css';

export default {
  name: 'App',
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
};
</script>