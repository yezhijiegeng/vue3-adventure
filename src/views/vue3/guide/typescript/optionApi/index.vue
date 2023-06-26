<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import axios from "axios";
// import type { Book } from "./index"; // 只有ts 文件能用
interface Book {
  title: string;
  author: string;
  year?: number;
}
export default defineComponent({
  props: {
    name: String,
    id: [Number, String],
    msg: { type: String, required: true },
    metadata: null,
    book: {
      // 提供相对‘Object’更确定的类型
      type: Object as PropType<Book>,
      //   required: true,
      default: () => ({
        title: "Arrow Function Expression",
      }),
      validator: (book: Book) => !!book.title,
    },
    // 标记函数
    callback: Function as PropType<(id: number) => void>,
  },
  data() {
    return {
      say: "hello",
    };
  },
  computed: {
    // ---------------------------------为计算属性标注类型---------------------------------
    // 显式标注返回类型
    greeting(): string {
      return this.say + "!";
    },
    greetingUppercase: {
      get(): string {
        return this.greeting.toUpperCase();
      },
      set(newVal: string) {
        this.say = newVal.toUpperCase();
      },
    },
  },
  // --------------------------------- 为组件的 emits 标注类型---------------------------------
  emits: {
    addBook(payload: { bookName: string }) {
      return payload.bookName.length > 0;
    },
  },
  methods: {
    onsubmit() {
      this.$emit("addBook", {
        bookName: "123",
      });

      //   this.$emit("nom-declare-event"); // 类型错误
    },
    handleChange(event: Event) {
      // ---------------------------------为事件处理标注类型---------------------------------
      console.log((event.target as HTMLInputElement).value);
    },
  },
  mounted() {
    this.name;
    this.id;
    this.msg;
    this.metadata;
    this.callback?.("123");
  },
});

// ---------------------------------为组件的 emits 标注类型---------------------------------
</script>
<template>
  <h1>TypeScript 与选项式 API</h1>

  book:{{ book.title }}
  <input type="inout" v-model="say" />
  {{ greeting }}
  {{ greetingUppercase }}
  <!-- $filters:{{ $filters.isPeriodEmpty("dd") }} -->
</template>
