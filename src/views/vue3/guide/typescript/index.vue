<script lang="ts">
import { defineComponent } from "vue";
import Message from "@/components/Message/index.vue";
import TodoItem from "@/components/TodoItem/index.vue";
export default defineComponent({
  props: {
    // name: String,
    // msg: { type: String, required: true },
  },
  components: {
    Message,
    TodoItem,
  },
  data() {
    return {
      count: 1,
      msg: "",
      todoList: [
        { id: 1, text: "打扫房间" },
        { id: 2, text: "画画" },
      ],
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Supported" },
      ],
    };
  },
  mounted() {
    // this.name;
    // this.msg;
    // this.count;

    this.msg = "hello";
    this.change();
  },
  setup(props, ctx) {
    const change = () => {
      console.log("changing");
    };

    return {
      change,
    };
  },
});
</script>

<template>
  <div>
    总览1
    <Message :message="msg" @change="change" />
    <TodoItem :todo="groceryList" :foo="'哈哈'" />
  </div>
</template>
