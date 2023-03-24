<script>
import { ref } from "vue";

export default {
  props: ["title"],
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`,
  // 或者 `template: '#my-template-element'`
};
</script>
<template>
  <div>about</div>
</template>
