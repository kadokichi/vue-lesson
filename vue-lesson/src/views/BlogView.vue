<script setup>
  import { watch } from 'vue'
  import { RouterLink, useRoute } from 'vue-router';
  const route = useRoute()
  console.log(route.params.id)
  watch(
    () => route.params.id,
    () => {
      console.log('watch')
  })
</script>

<template>
  <h2>Blog(id: {{ $route.params.id }})</h2>
  <RouterLink
    :to="{
      name: 'blog',
      params: {
        id: Number($route.params.id) + 1
      }
    }"
  >NEXT</RouterLink>
</template>
