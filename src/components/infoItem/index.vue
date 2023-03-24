<template>
  <div class="tab">
    infoItem
    <div>{{ likesDesc }}</div>
    <div>{{ tips }}</div>
    <button @click="$emit('addNew')">新增导航</button>
    <button @click="$emit('increaseBy', 2)">放大文字</button>
    <div class="items"></div>
    <Items @addItem="addItem"></Items>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import Items from "@/components/Items/index.vue";
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const props = defineProps({
  title: String,
  likes: Number,
  tips: {
    type: String,
    default: "success",
    validate(value) {
      return ["success", "warnning", "danger"].includes(value);
    },
  },
  person: {},
});
let likesDesc = computed(() => {
  return "她有" + props.likes + "个爱好";
});

onMounted(() => {
  console.log("infoItem");
  console.log(props.title);
  console.log(props.likes);
});
function addItem(value) {
  console.log("addItem:", value);
}
</script>
