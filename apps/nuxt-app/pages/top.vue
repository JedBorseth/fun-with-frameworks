<script setup>
postIds.forEach(async (postId) => {
  const { data, error, pending } = await useFetch(
    `https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`
  );
  if (data.value) {
    PostsArray.push(data.value);
  }
});
const PostsArray = [];
console.log(PostsArray);
</script>

<template>
  <main>
    <ClientOnly fallback-tag="span" fallback="Loading...">
      <div v-for="Post in PostsArray" :key="Post.id" ref="PostsArray">
        <h1>{{ Post.title }}</h1>
        <p>{{ Post.by }}</p>
      </div>
    </ClientOnly>
  </main>
</template>
