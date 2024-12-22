<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  function toAbout() {
    console.log('toAbout')
    router.push({ path: '/about' })
  }
</script>

<template>
  <h1>Vue Router</h1>
  <RouterLink :to=" '/' " replace>Home</RouterLink> |
  <button @click="toAbout">About</button>
  <RouterView />
</template>

<style scoped>

</style>
