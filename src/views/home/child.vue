<template>
  <div>hello I am child</div>
  <h4>{{ title }}</h4>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const a = 1;
const b = ref(2);

defineExpose({
  a,
  b,
});

defineProps(["title"]);
</script>
