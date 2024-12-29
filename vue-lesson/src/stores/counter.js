import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) //State
  const doubleCount = computed(() => count.value * 2) //Getters
  function increment() { //Actions
    count.value++
  }
  return {
    count: count,
    doubleCount, //doubleCount: doubleCountと同じ
    increment
  }
})
