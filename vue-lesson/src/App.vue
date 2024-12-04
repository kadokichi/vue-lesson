<script setup>
  import { ref, computed } from 'vue'
  const score = ref(0)
  const count =ref(0)
  function tmp() {
    return score.value > 3 ? 'Good' : 'Bad'
  }
  const evaluation = computed(() => {
    console.log('evaluation')
    return score.value > 3 ? 'Good' : 'Bad'
  })
  function getEvalation() {
    console.log(evaluation.value)
  }
</script>

<template>
  <p>{{ score> 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ tmp() }}</p>
  <p>score: {{ score }}</p>
  <p>count: {{ count }}</p>
  <button @click="score++">+1 score</button>
  <button @click="count++">+1 count</button>
  <button @click="getEvalation">getEvalation</button>
</template>

