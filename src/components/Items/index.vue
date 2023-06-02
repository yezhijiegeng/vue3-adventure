<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: {
    addItem(navLoad: { navName: string }) {
      return navLoad.navName.length > 0;
    },
  },
  methods: {
    addOne() {
      this.$emit("addItem", {
        navName: "花瓣",
      });
    },
  },
});
</script>
<template>
  <!-- <input type="text" /> -->
  <div>
    <div>Items</div>
    <button @click="addOne">增加一条</button>
  </div>
</template>
