<script setup>
  import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';
  onMounted(() => {
    console.log('CompB onMounted')
  })
  onUnmounted(() => {
    console.log('CompB onUnmounted')
  })
  onActivated(() => {
    console.log('onActivated')
  })
  onDeactivated(() => {
    console.log('onDeactivated')
  })
  const count = ref(0)
</script>
<template>
  <h2>CompB</h2>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
