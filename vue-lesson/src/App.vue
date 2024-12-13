<script setup>
  import BaseCard from './components/BaseCard.vue';
</script>

<template>
  <h1>Slots</h1>
  <BaseCard>
    <template #header>
      <h2>Vue.js Course</h2>
    </template>
    <template #main>
      <p>This is Vue.js Course</p>
    </template>
    <template #footer>
      <p>Introductor: kdy</p>
    </template>
  </BaseCard>
</template>

<style scoped>

</style>
