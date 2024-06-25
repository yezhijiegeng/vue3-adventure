<template>
  <div>vueUse vueUse111 color: {{ color }} count:{{ count }}</div>
  {{ theDefault }}
  <hr>
  <button @click="toggle">点击切换</button>
</template>

<script setup>
import { useStorage,useFullscreen} from "@vueuse/core";

import { onMounted, ref } from "vue";

const color = ref("");
const count = ref(0);

const theDefault = ref({
  name: "Banana",
  color: "yellow",
  size: "midium",
  count: 0,
});

onMounted(() => {
  let state = useStorage("vue-use-localstorage", theDefault);
  console.log("state", state.value.color);
  color.value = state.value.color;

  const { isFullscreen, toggle } = useFullscreen();


  return {
    color,
    count,
  };
});
</script>
