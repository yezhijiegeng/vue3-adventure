<script setup>
import { reactive, computed } from "vue";

const authors = reactive({
  name: "Tao zi",
  books: ["vue", "react", "python"],
});

const publishedBooks = computed(() => {
  return authors.books.length > 0 ? "Yes" : "No";
});

const now = computed(() => Date.now());

const firstName = ref("John");
// const lastName = ref("Doe")
// const fullName = computed({
//     get(){
//         return firstName.value + ' ' +lastName.value
//     },
//     set(newValue){
//             [firstName.value,lastName.value] = newValue.split(' ')
//     }
// })
// fullName = 'Tap zi'
</script>
<template>
  <div>
    <h4 class="title">推荐使用计算属性来描述依赖响应式状态的复杂逻辑。</h4>
    <span>{{ publishedBooks }}</span>
    <hr />
    <h4 class="title">计算属性缓存 vs 方法</h4>
    你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：
    计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其<u>响应式依赖更新时才重新计算</u>。这意味着只要
    author.books 不改变，无论多少次访问 publishedBooksMessage
    都会立即返回先前的计算结果，而不用重复执行 getter 函数。
    <br />
    <br />
    这也解释了为什么下面的计算属性永远不会更新，因为 Date.now()
    并不是一个响应式依赖： const now = computed(() => Date.now())
    {{ now }}
    <br />
    <br />
    相比之下，方法调用<u>总是</u>会在重渲染发生时再次执行函数。<br />
    为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性
    list，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于
    list。<u>没有缓存的话，我们会重复执行非常多次 list 的 getter</u
    >，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。
    <hr />
    <h4 class="title">可写计算属性</h4>
    <!-- <span>{{fullName}}</span> -->
    不要在 getter 中做异步请求或者更改 DOM！<br />
    避免直接修改计算属性值
    <hr />
  </div>
</template>
