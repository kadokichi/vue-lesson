<script setup>
  import { ref } from 'vue'
  import BaseCard from './components/BaseCard.vue';
  const y = ref('y')
</script>

<template>
  <h1>Slots</h1>
  <BaseCard>
    <h2>Hello</h2>
    <p>How Are You</p>
    <p>{{ x }}</p>
    <p>{{ y }}</p>
  </BaseCard>
  <BaseCard>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Grape</li>
    </ul>
  </BaseCard>
</template>

<style scoped>

</style>
