<template>
  <div>
    <div class="test-utils-value">值为：{{ num }}</div>
    <button class="test-utils-button" @click="increment">测试按钮</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const num: Ref<number> = ref(1);
function increment() {
  num.value++;
}
</script>
