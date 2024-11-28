<script setup>
  import { ref, reactive } from 'vue'

  const title = ref('Vue.js Lesson')

  let price = ref(9.99)
  function increment() {
    price.value += 1
    instructor.age += 1
    instructor.bio = 'hai dy'
    instructor.sns.x = 'hello'
    //console.log(price.value)
  }

  const info = ref({
    students: 1000,
    rating: 4
  })
  console.log(info.value.students)

  const instructor = reactive({
    name: 'dydy',
    age: 25,
    sns: {
      x: "@_xcvb",
      youtube: '@dydy'
    }
  })
  instructor.bio = 'hello'
  console.log(instructor.sns)
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Student: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS: {{ instructor.sns.x }}</h2>
</template>
<style>
  h1 {
    color: red;
  }
</style>
