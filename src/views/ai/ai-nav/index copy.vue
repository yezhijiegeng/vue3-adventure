<template>
  <div class="home">
    <AiHeader />
    <el-container>
      <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      collapse-transition="false"
    >
      <nav-menu-item v-for="menu in menus" :key="menu.id" :menu="menu"></nav-menu-item>
    </el-menu>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { onMounted, reactive } from "vue";
import MainPage from "./main-page/index.vue";
import AiHeader from './ai-header'


@Options({
  components:{
    AiHeader,
    MainPage
  }
})
export default class AiNav extends Vue { 
  items = [
    {
      name: "聊天对话",
      path: "/ai/chat",
    },
    {
      name: "图形图像",
      path: "/testthree",
    },
    {
      name: "工具",
      // index: 2,
      children: [
        {
          name: "视频转文字",
          path: "/typescript",
        },
      ],
    },
    {
      name: "AI办公",
      index: 2,
      children: [
        {
          name: "typescript",
          path: "/typescript",
        },
        {
          name: "Navigator two two",
          path: "/testtwo",
        },
      ],
    },
    {
      name: "AI学习",
      index: 3,
      children: [
        {
          name: "ai",
          // path: "/ai-nav",
          path: "/ai",
        },
      ],
    },
  ]

  }

</script>
<style lang="scss" scoped>
.home {
}
</style>
