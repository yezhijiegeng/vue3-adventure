<template>
  <div class="blog-post">
    <div class="item">
      <h4>{{ title }}</h4>
      <el-button @click="$emit('enlarge-text')">+</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["title"]);
console.log(props.title);
const emit = defineEmits("enlarge-text");
emit("enlarge-text");
</script>
<style scoped>
.blog-post .item {
  display: flex;
}
</style>
