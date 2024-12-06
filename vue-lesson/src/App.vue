<script setup>
  import { ref } from 'vue'
  const fruits = ref([
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Apple'},
    {id: 3, name: 'Banana'},
    {id: 4, name: 'Grape'}
    ])
</script>

<template>
  <button @click="fruits.shift()">button</button>
  <template v-for="({id, name}, index) in fruits" :key="id">
    <template v-if="id === 2">
      <p>id: {{ id }}</p>
      <p><input type="text">{{ name }}({{ index }})</p>
    </template>
  </template>
</template>

<style>

</style>
