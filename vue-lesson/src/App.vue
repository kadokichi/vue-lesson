<script setup>
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue';
const userInput = ref('hello')
const titleInput = ref('title')
</script>

<template>
  <h1>V-model</h1>
  <CustomInput v-model.uppercase="userInput" v-model:title-name="titleInput"/>
  <p>userInput: {{ userInput }}</p>
  <p>titleInput: {{ titleInput }}</p>
</template>

<style scoped>

</style>
