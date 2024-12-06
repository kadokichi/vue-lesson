<script setup>
  import { ref } from 'vue'
  const user = ref({
    name: 'dydy',
    age: 25,
    gender: 'mix'
  })
</script>

<template>
  <p v-for="(value, key, index) in user" :key="value">{{key}}: {{ value }}({{ index }})</p>
</template>

<style>

</style>
