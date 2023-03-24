<script setup lang="ts">
import type { HTMLInputElement } from "vue";

function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value);
  console.log((event.target as HTMLInputElement).tagName);
}

/* 为 provide / inject 标注类型 */
import { provide, inject } from "vue";
import type { InjectionKey } from "vue";

const key = Symbol() as InjectionKey<string>;
provide(key, "foo");
const foo = inject(key);
</script>
<template>
  <div>
    <h2 class="title">为事件处理函数标注类型</h2>
    <input type="text" @change="handleChange" />
    <hr />
    <h2 class="title">为 provide / inject 标注类型</h2>
    provide 和 inject 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue
    提供了一个 InjectionKey 接口，它是一个继承自 Symbol
    的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：
    <hr />
  </div>
</template>
<style></style>
