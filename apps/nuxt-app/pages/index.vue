<script setup>
const data = ref(null);
const error = ref(null);

fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err));

const getStarted = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hacker News</h1>
          <p class="py-6">
            A clone of <a href="https://news.ycombinator.com/">Hacker News</a>
            built with NuxtJS.
          </p>
          <button
            class="btn btn-primary btn-outline"
            @click="
              () => {
                getStarted();
              }
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
