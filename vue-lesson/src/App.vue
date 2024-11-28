<script setup>
  const title = 'Vue.js Lesson'
  let price = 9.99
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price:$ {{ price - 1 }}</h2>
</template>
<style>
  h1 {
    color: red;
  }
</style>
