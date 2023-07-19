<script lang="ts">
import { defineComponent, computed } from "vue";
import FancyButton from "@/components/FancyButton.vue";
import router from "../../router/index.js";
/* import { useI18n } from "vue-i18n";
const { t } = useI18n();
console.log(t("login.useName"));
 */
export default defineComponent({
  data() {
    return {
      message: "Hello",
      activeIndex: "1",
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
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
  },
  mounted(){
    debugger
  }
});
</script>
<template>
  <div class="header">
    <div class="header-box">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
        <el-menu-item index="1">Processing Center</el-menu-item>
      </el-menu>
    </div>
    <div>天气</div>
    <div class="person-center">
      个人中心 <el-button type="button" @click="toLogin">登录</el-button>
    </div>
    {{ greetingUpperCased }}
    <FancyButton>share</FancyButton>
    <button @click="toProfile">个人中心</button>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
}
</style>
