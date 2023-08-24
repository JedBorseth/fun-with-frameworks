<script setup lang="ts">
const { data } = await useFetch("/api/getPostIds?count=10");
</script>

<template>
  <main>
    <h1 class="text-4xl text-center p-10">Today's Top Posts</h1>
    <div class="grid">
      <Post v-for="post in data?.body" :key="post" :id="post" />
    </div>
  </main>
</template>
