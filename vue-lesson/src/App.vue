<script setup>
  //import { ref } from 'vue';
</script>

<template>
  <h1>Vue Router</h1>
  <RouterLink :to=" '/' ">Home</RouterLink> |
  <RouterLink :to="{ path: '/about', query: { lang: 'ja'}, hash: '#title' }">About</RouterLink>
  <RouterView />
</template>

<style scoped>

</style>
