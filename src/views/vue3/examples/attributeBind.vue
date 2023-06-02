<template>
  <div>Attribute 绑定</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  // input.value.focus();
  test();
});

// const about = ref(null);
function test() {
  /* console.log("child:", child.value.a);
    console.log("child:", child.value.b); */
}
</script>
<style></style>
