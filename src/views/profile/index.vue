<template>
  <div class="profile">
    profile
    <profile @submit="submit"></profile>
  </div>
</template>
<script lang="ts">
import { onMounted, computed, reactive, defineComponent } from "vue";
import profile from "./profile/index.vue";
/* 
const form = reactive({ 
  name: "",
  email: "",
});

const onSubmit = () => {
  console.log("submit!");
}; */

export default defineComponent({
  data() {
    return {};
  },
  emits: {},
  methods: {
    submit(value: string) {
      console.log("submit value:", value);
    },
  },
  components: {
    profile,
  },
});
</script>
