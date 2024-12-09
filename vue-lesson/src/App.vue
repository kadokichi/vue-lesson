<script setup>
  import { ref } from 'vue'
  //import CountUp from './components/CountUp.vue';
  //import BaseButton from './components/BaseButton.vue';
  import ShowCount from './components/ShowCount.vue';
  const count = ref(0)
</script>

<template>
  <ShowCount :total-score="count" />
  <button @click="count++">+1</button>
</template>

<style>

</style>
