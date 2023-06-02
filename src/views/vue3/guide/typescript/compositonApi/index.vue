<script setup lang="ts">
// ------------------------------------为组件的 props 标注类型------------------------------------------------
import type { PropType } from "vue";
/* const props = defineProps({
  todo: Array,
  foo: { type: String, required: true },
  bar: Number,
}); */

/*  */
/* interface Person {
  todo: Array;
  foo: string;
  bar?: number;
  msg: string;
} */
interface Book {
  title: string;
  author: string;
  year: number;
}

/* // 通过泛型参数的方式定义
const props = defineProps<Person>(); */
/* 
// Props 解构默认值
const props = withDefaults(defineProps<Person>(), {
  msg: "hello",
  labels: () => ["one", "two"],
}); */

/*  // 复杂的 prop 类型
const props = defineProps<{
  book: Book;
}>(); */

// 运行时声明：
const props = defineProps({
  book: Object as PropType<Book>,
  todo: Array,
});

console.log(props.foo);
console.log(props.bar);
// let x: string | number = 1;
// ------------------------------------为组件的 emits 标注类型------------------------------------------------

// const emit = defineEmits(["change", "update"]); // 运行时

// 基于类型
const emit = defineEmits<{
  (e: "change", id: number): void;
  (e: "update", value: string): void;
}>();

// --------------------------------------为 ref() 标注类型-------------------------------------------------------
import { ref } from "vue";
import type { Ref } from "vue";

/* // Ref 复杂类型
const year: Ref<string | number> = ref("2023");
year.value = 2020; */

// 用ref 直接声明
const year = ref<string | number>("2020");
year.value = 2024;

const n = ref<number>(); // // 推导得到的类型：Ref<number | undefined>

// --------------------------------------为 reactive() 标注类型-------------------------------------------------------
import { reactive } from "vue";

interface ItBook {
  title: string;
  year?: number;
}
const book: ItBook = reactive({ title: "小工到专家" });

// --------------------------------------为 computed标注类型-------------------------------------------------------
import { computed } from "vue";
const count = ref(0);
const double = computed(() => count.value * 2);
// const result = double.value.split("");

// --------------------------------------为 事件处理函数标注类型-------------------------------------------------------
function handleChange(event: Event) {
  console.log("event.target:", (event.target as HTMLInputElement).value);
}

//   --------------------------------------为 provide / inject 标注类型-------------------------------------------------------
import { provide, inject } from "vue";
import type { InjectionKey } from "vue";

const key = Symbol() as InjectionKey<string>;
provide(key, "foo");
// const foo = inject(key);
// const foo = inject<string>("foo");
// const foo = inject<string>("foo", "bar");
const foo = inject("foo") as string; // 强制转换

//   --------------------------------------为模板引用标注类型-------------------------------------------------------
import { onMounted } from "vue";
const el = ref<HTMLInputElement | null>(null);

onMounted(() => {
  el.value?.focus();
});
//   --------------------------------------为组件模板引用标注类型-------------------------------------------------------
import Mymodal from "@/components/MyModal/index.vue";
const modal = ref<InstanceType<typeof Mymodal> | null>(null);
const openModal = () => {
  modal.value?.open();
};

import type { ComponentPublicInstance } from "vue";
const child = ref<ComponentPublicInstance | null>(null);
</script>
<template>
  <h1>TypeScript 与组合式 API</h1>
  <ul>
    <li v-for="item in todo" :todo="item" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
  year:{{ year }}n:{{ n }}book:{{ book }}
  <input type="text" @change="handleChange" />
  <!-- {{ (x as number).toFixed() }} -->
  <input ref="el" />
</template>
