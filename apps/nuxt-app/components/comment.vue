<script setup>
const props = defineProps(["id"]);
let { data } = await useFetch(`/api/getPost?postId=${props.id}`);
data = data.value.body;
</script>

<template>
  <div></div>
</template>
