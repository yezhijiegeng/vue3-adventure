<script setup>
import { watch,ref } from "vue";

const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});
</script>
<template>
  <div>
    <h1></h1>
    <h2 class="title">基本示例</h2>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <hr />
  </div>
</template>
<style></style>
