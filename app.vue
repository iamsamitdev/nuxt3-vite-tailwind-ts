<script setup lang="ts">
  useHead({
    title: 'Home',
    meta: [
      { 
        name: 'keywords', 
        content: 'Home, Nuxt 3,Learning Nuxt 3'
      },
      {
        name: 'author',
        content: "IT Genius Engineering Ltd., Thailand"
      },
      {
        name: 'Description',
        content: 'Home Nuxt 3,  IT Genius Engineering'
      }
    ]
  })
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <h1 class="text-3xl font-bold text-blue-700 animate-bounce">
      Hello Nuxt 3
    </h1>
  </div>
</template>
