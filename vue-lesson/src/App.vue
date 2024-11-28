<script setup>
  import { ref } from 'vue'
  const title = ref('Vue.js Lesson')
  let price = ref(9.99)
  function increment() {
    price.value += 1
    //console.log(price.value)
  }
  const info = ref({
    students: 1000,
    rating: 4
  })
  console.log(info.value.students)
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Student: {{ info.students }}</h2>
</template>
<style>
  h1 {
    color: red;
  }
</style>
