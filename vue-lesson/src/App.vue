<script setup>
  import { ref } from 'vue'
  const fruits = ref([
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Apple'},
    {id: 3, name: 'Banana'},
    {id: 1, name: 'Grape'}
    ])
</script>

<template>
  <button @click="fruits.shift()">button</button>
  <li v-for="(fruit, index) in fruits" :key="fruit.id"><input type="text">{{ fruit.name }}({{ index }})</li>
</template>

<style>

</style>
