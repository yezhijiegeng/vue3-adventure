<script setup>
import { ref, reactive } from "vue";

const counter = reactive({
  count: 0,
});

console.log(counter.count);
counter.count++;

// Attribute 绑定
const titleClass = ref('title')
const tempId = ref('id')

</script>
<template>
  <h1>声明式渲染</h1>
  <div>
    reactive() 创建的对象都是 JavaScript Proxy，其行为与普通对象一样：
    {{ counter.count }}
  </div>
  <br>
  <div>
    reactive() 只适用于对象 (包括数组和内置类型，如 Map 和 Set)。而另一个 API
    ref() 则可以接受任何值类型。ref 会返回一个包裹对象，并在 .value
    属性下暴露内部值。 reactive() 和 ref() 的细节在指南 -
    响应式基础一节中有进一步讨论。 
	<br>
	在组件的 'script setup'块中声明的响应式状态，可以直接在模板中使用。下面展示了我们如何使用双花括号语法，根据
    counter 对象和 message ref 的值渲染动态文本：
  </div>
  
  <h1>Attribute 绑定</h1>
  <div :class="titleClass">make a red</div>
  <div :id="tempId">make a id</div>


</template>

<style>

.title {
	color: red;
}
#id{
 color: yellow
}

</style>
