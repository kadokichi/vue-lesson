<script setup>
  import { useCounterStore } from '../stores/counter';
  const counterStore = useCounterStore()
  console.log(counterStore.count)
</script>

<template>
  <h2>CounterComp</h2>
  <button @click="counterStore.count++">+1</button>
  <p>{{ counterStore.count }}</p>
</template>

<style scoped>

</style>
