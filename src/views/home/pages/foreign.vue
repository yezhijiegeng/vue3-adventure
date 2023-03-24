<template>
  <div class="tab">
    111
    <ForeignItem :title="'foreignItem'" :likes="5"></ForeignItem>
  </div>
</template>
<script>
import { onMounted } from "vue";
import ForeignItem from "../../../components/foreignItem/index.vue";
export default {
  name: "foreign",
  component: {
    ForeignItem,
  },
  setup() {
    onMounted(() => {
      console.log("foreign");
    });
  },
};
</script>
