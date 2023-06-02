<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["change"],
  props: {
    message: String,
  },
  setup(props, { emit }) {
    props.message;
    emit("change");
  },
});
</script>
<template>
  <div>消息：{{ message }}</div>
</template>
