<script setup>
const props = defineProps(["id"]);
let { data } = await useFetch(`/api/getPost?postId=${props.id}`);
data = data.value.body;
const comments = false;
</script>

<template>
  <div class="collapse bg-base-200 collapse-arrow m-5 w-5/6">
    <a :href="data.url" class="absolute top-2 left-5 z-50">
      <Icon name="system-uicons:globe" />
    </a>
    <input
      type="checkbox"
      @focus="
        () => {
          console.log('test');
        }
      "
    />
    <div class="collapse-title text-lg font-medium pt-10">
      <h2>{{ data.title }}</h2>
      <h3 class="text-sm text-opacity-50">{{ data.author }}</h3>
    </div>
    <div class="collapse-content">
      <div v-if="comments">hello</div>
      <span class="loading loading-spinner loading-lg" v-else></span>
    </div>
  </div>
</template>
