<template>
  <div class="profile">
    profile
    <login @submit="submit"></login>
  </div>
</template>
<script lang="ts">
import { onMounted, computed, reactive, defineComponent } from "vue";
import login from "./login/index.vue";
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
    login,
  },
});
</script>
