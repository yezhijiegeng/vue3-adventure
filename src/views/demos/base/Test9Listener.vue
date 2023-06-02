<script setup>
import { watch, ref } from "vue";

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

const x = ref(0);
const y = ref(0);
const sum = ref(0);

// 单个ref
watch(x, (newX) => {
  console.log("x is ", x.value);
});

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum is:${sum}`);
  }
);

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
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

    x:<input v-model="x" /> y:<input v-model="y" />
  </div>
</template>
<style></style>
