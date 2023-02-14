<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
  console.log("hello script setup");

  const dynamicId = '11'

  const obj = {
    id:"container",
    class:"wrapper"
  }

</script>

<template>
  <div class="greetings" v-bind:id="dynamicId"> <!-- Attribute 动态绑定。简写:ic="dynamicId" -->
    hello taozi
  </div>
  <div v-bind="obj">这是一个容器</div>
  <div :id="`list-${dynamicId}`">支持表达式</div>




</template>

<style scoped>

</style>
