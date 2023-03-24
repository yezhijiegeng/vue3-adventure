<script setup>
import { ref, reactive, computed, onMounted } from "vue";

const name = ref("Vue.js");

function greet(event) {
  console.log("Hello," + name.value);
  if (event) {
    alert(event.target.tagName);
  }
}
function warn(message, $event) {
  if (event) {
    event.preventDefault();
  }
  alert(message);
}
function doThis() {
  console.log("doThis");
}

function doThat() {
  console.log("doThat");
}
function onSubmit() {
  console.log("onSubmit");
}
function onDelete() {
  console.log("onDelete");
}
function clear() {
  console.log("clear");
}

onMounted(() => {
  console.log("onMounted");
});
</script>
<template>
  <div>
    <h2 class="title">方法事件处理器</h2>
    <button @click="greet">Greet</button>
    <div>
      方法事件处理器会自动接收原生 DOM
      事件并触发执行。在上面的例子中，我们能够通过被触发事件的
      event.target.tagName <u>访问到该 DOM 元素</u> 。
    </div>
    <hr />
    <h2 class="title">在内联事件处理器中访问事件参数</h2>
    <button @click="warn('Form cannot be submited yet.', $event)">
      Submit
    </button>
    <hr />
    <h2 class="title">事件修饰符</h2>
    <a href="https://www.baidu.com/" @click="doThis.stop">百度</a>

    <p>.stop 单击事件将停止传递</p>
    <div @click="doThat">
      <button @click.stop="doThis">do this</button>
    </div>
    <hr />
    <p>.prevent 不再重新加载页面</p>
    <form @submit.prevent="onSubmit">
      <input value="提交" type="submit" />
    </form>
    <hr />
    <div>
      使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用
      @click.prevent.self 会阻止**元素及其子元素的所有点击事件的默认行为，**而
      @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。
    </div>
    <a href="https://vuejs.org/" v-on:click.self.prevent target="_blank"
      >Open Vue
      <p>Click me now</p>
    </a>
    <p>demo 2 v-on:click.prevent.self 都不跳转</p>
    <a href="https://vuejs.org/" v-on:click.prevent.self target="_blank"
      >Open Vue
      <p>Click me now</p>
    </a>
    <hr />
    <div>
      添加事件监听器时，使用 `capture`
      <u>捕获模式</u>
      :例如：指向内部元素的事件，在被内部元素处理前，先被外部处理
      <div @click="doThis">
        <button @click="doThat">dothat</button>
      </div>
    </div>
    <hr />
    <button @click.once="doThis">vuejs</button>
    <hr />
    <h2 class="title">按键修饰符</h2>
    <input @keyup.enter="onSubmit" />
    <hr />
    <h3>按键别名</h3>
    <input @keyup.delete="onDelete" />
    <hr />
    <h3>系统按键修饰符</h3>
    <input @keyup.alt.enter="clear" />
  </div>
</template>
<style></style>
