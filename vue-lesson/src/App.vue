<script setup>
  import { ref } from 'vue'
  const userInput = ref('')
</script>

<template>
  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text">
  <button @click="userInput = 'hey'">btn</button>
</template>

