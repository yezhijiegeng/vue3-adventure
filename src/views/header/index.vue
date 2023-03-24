<script lang="ts">
import { defineComponent, computed } from "vue";
import FancyButton from "@/components/FancyButton.vue";
import router from "../../router/index.js";

export default defineComponent({
  data() {
    return {
      message: "Hello",
    };
  },
  computed: {
    greeting(): string {
      return this.message + "!";
    },
    greetingUpperCased: {
      get(): string {
        return this.greeting.toUpperCase();
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase();
      },
    },
  },
  methods: {
    toProfile() {
      router.push("/profile");
    },
  },
});
</script>
<template>
  <div class="header">
    {{ greetingUpperCased }}
    <FancyButton>share</FancyButton>
    <button @click="toProfile">个人中心</button>
  </div>
</template>
