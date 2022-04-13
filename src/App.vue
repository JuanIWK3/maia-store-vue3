<script setup lang="ts">
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <router-view />
</template>

<style>
#app {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
