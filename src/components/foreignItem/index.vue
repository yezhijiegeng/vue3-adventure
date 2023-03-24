<template>
  <div class="tab">infoItem</div>
</template>
<script setup>
import { onMounted } from "vue";
const props = defineProps({
  title: String,
  likes: Number,
});
onMounted(() => {
  console.log(props.title);
});
</script>
