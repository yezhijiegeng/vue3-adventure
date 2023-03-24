<template>
  <div>
    <div class="tab">program component</div>
    <InfoItem
      :title="title"
      :likes="3"
      @add-new.once="addNew"
      @increaseBy="increaseBy"
    ></InfoItem>
    <div :tips="111"></div>
    <p :style="`font-size:${fontSize}px;`">正文</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import InfoItem from "../../../components/infoItem/index.vue";
let title = "item-info";
let fontSize = ref(12);
onMounted(() => {
  console.log("onMounted");
});

/* const addNew = function() {
  console.log("addNew")
} */
function addNew() {
  console.log("addNew");
}
function increaseBy(n) {
  fontSize.value += n;
  console.log(fontSize.value, n);
}
</script>
