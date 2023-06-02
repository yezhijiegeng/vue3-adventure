<script setup lang="ts">
// ------------------------------------为组件的 props 标注类型------------------------------------------------
import type { PropType } from "vue";
const props = defineProps({
  todo: Array,
  foo: { type: String, required: true },
  bar: Number,
});
</script>
<template>
  <ul>
    <li v-for="item in todo" :todo="item" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>
