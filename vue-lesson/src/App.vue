<script setup>
  import BaseCard from './components/BaseCard.vue';
</script>

<template>
  <h1>Slots</h1>
  <BaseCard v-slot="{ pageCount }">
    <!-- <template #header="{ pageCount }"> -->
      <p>PageCount: {{ pageCount }}</p>
      <h2 v-if="pageCount === 1">Vue.js Course</h2>
      <h2 v-if="pageCount === 2">HTML Course</h2>
      <h2 v-if="pageCount === 3">CSS Course</h2>
    <!-- </template> -->
    <!-- <template #main="{ pageCount }"> -->
      <p v-if="pageCount === 1">This is Vue.js Course</p>
      <p v-if="pageCount === 2">This is HTML Course</p>
      <p v-if="pageCount === 3">This is CSS Course</p>
    <!-- </template> -->
    <!-- <template #footer> -->
      <p>Introductor: kdy</p>
    <!-- </template> -->
  </BaseCard>
</template>

<style scoped>

</style>
