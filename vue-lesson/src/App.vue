<script setup>
  import { ref, reactive } from 'vue'

  const title = ref('Vue.js Lesson')

  let price = ref(9.99)

  function increment() {
    price.value += 1
    instructor.age += 1
    instructor.bio = 'hai dy'
    instructor.sns.x = 'hello'
    instructor.email = 'info@example.com'
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
    },
    email: ref('dydy@example.com')
  })
  instructor.bio = 'hello'
  // console.log(instructor.sns)
  // console.log(instructor.email)

  const courseInfo = {
    sections: ref(10),
    language: ref('Japanese')
  }

  const sections = courseInfo.sections
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Student: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS: {{ instructor.sns.x }}</h2>
  <h2>Instructor email: {{ instructor.email }}</h2>
  <h2>Courseinfo section: {{ courseInfo.sections + 1 }}</h2>
  <h2>Courseinfo section: {{ sections + 1 }}</h2>
</template>
<style>
  h1 {
    color: red;
  }
</style>
