<script setup>
  const title = 'Vue.js Lesson'
  let price = 9.99
  function increment() {
    price += 1
    console.log(price)
  }
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
</template>
<style>
  h1 {
    color: red;
  }
</style>
