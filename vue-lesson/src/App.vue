<script setup>
  import { ref } from 'vue'
  //import CountUp from './components/CountUp.vue';
  //import BaseButton from './components/BaseButton.vue';
  //import ShowCount from './components/ShowCount.vue';
  import ResetButton from './components/ResetButton.vue';
  const count = ref(0)
</script>

<template>
  <p>count {{ count }}</p>
  <button @click="count++">+1</button>
  <ResetButton @reset="count = 0"/>
</template>

<style>

</style>
