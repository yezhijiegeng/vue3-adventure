<template>
  <div class="ai-nav">
    <div class="common">
      <el-link
        class="common-item"
        @click="toUrl(item.url)"
        v-for="item in websites"
        :key="item.url"
      >
        <img
          :src="item.icon"
          alt=""
          class="common-item__icon"
          v-show="item.icon"
        />
        {{ item.name }}
      </el-link>
      <el-link class="common-item" @click="addUrl">
        <el-icon :size="16" :color="'#999'"><CirclePlus /></el-icon>
        添加网址
      </el-link>
    </div>
    <DialogEdit v-show="outerVisible" :show="outerVisible" @close="closeDialog" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
// import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { useRouter } from "vue-router";
import axios from "axios";
import DialogEdit from './dialog-edit/index.vue'

@Options({
  name: "AiNav",
  components: {
    DialogEdit
  },
})
export default class AiNav extends Vue {
  outerVisible = false;
  navList: any = [
    {
      name: "聊天",
      url: "/ai/chat",
    },
  ];

  menuList: any = [
    {
      name: "聊天",
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
          path: "/ai-nav",
        },
      ],
    },
  ];

  tabPosition: "left";
  newUrl = "";
  websites: any[] = [
    {
      name: "chatGpt",
      url: "www.baidu.com",
      id: 1,
    },
    {
      name: "midjourney",
      url: "www.midjourney.com",
      id: 2,
    },
    {
      name: "通义千问",
      url: "https://tongyi.aliyun.com/qianwen/",
      icon: "https://p6.itc.cn/q_70/images03/20230408/d79bd9bd642f460c8740d9b9fcb06178.png",
      id: 3,
    },
    {
      name: "豆包AI",
      url: "https://tongyi.aliyun.com/qianwen/",
      id: 3,
    },
  ];

  router = useRouter();

  handleSelect(index: string) {
    debugger;
    this.router.push({ name: index });
  }
  toUrl(url) {
    window.open(url);
  }
  addUrl(){
    this.outerVisible = true
  }

  async fetchWebsites() {
    const response = await axios.get("/api/websites");
    return response.data;
  }

  closeDialog(){
    this.outerVisible = false
  }

  async mounted() {
    // this.websites = await this.fetchWebsites();
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
