<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="height:60px;"
          src="@/assets/images/web_logo.png"
          alt="Element logo"
          
        />
      </el-menu-item>
      <el-menu-item index="1">个人中心</el-menu-item>
      <el-sub-menu index="2">
        <template #title>达芬桃</template>
        <el-menu-item index="2-1" @click="onExit">退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-container>
      <el-container>
        <el-aside width="200px" v-show="!isCollapse">
          <el-menu router :collapse="isCollapse">
            <template v-for="v in items" :key="v.path">
              <el-sub-menu v-if="v.children" :index="v.index">
                <template #title>
                  <!-- <el-icon><component :is="v.icon"></component></el-icon -->
                  {{ v.name }}
                </template>
                <template v-for="cv in v.children" :key="cv.path">
                  <el-submenu v-if="cv.children" :index="cv.path">
                    <template v-for="cvc in cv.children" :key="cvc.path">
                      <el-submenu v-if="cvc.children">
                        <template v-slot:title>{{ cvc.name }}</template>
                        <el-menu-item
                          v-for="cvcv in cv.children"
                          :key="cvcv.path"
                          :index="cvcv.path"
                          >{{ cvcv.name }}</el-menu-item
                        >
                      </el-submenu>
                      <template v-else>
                        <el-menu-item
                          v-for="cvc in cv.children"
                          :key="cvc.path"
                          :index="cvc.path"
                          >{{ cvc.name }}</el-menu-item
                        >
                      </template>
                    </template>
                  </el-submenu>
                  <el-menu-item v-else :key="cv.path" :index="cv.path">
                    <template #title>
                      {{ cv.name }}
                    </template>
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="v.path">
                <template #title>
                  <!-- <el-icon><component :is="v.icon"></component></el-icon -->
                  {{ v.name }}
                </template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <slot></slot>
          <!-- <router-view></router-view> -->
          <!-- <div class="demo">
            <button
              v-for="(_, tab) in tabs"
              :key="tab"
              :class="['tab-button', { active: currentTab === tab }]"
              @click="currentTab = tab"
            >
              {{ tab }}
            </button>
            <component :is="tabs[currentTab]" class="tab"></component>
          </div>
          <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost
              v-for="post in posts"
              :key="post.id"
              :title="post.title"
              @enlarge-text="postFontSize += 0.1"
            />
          </div> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import router from "../../router/index.js";
import about from "./about.vue";
import BlogPost from "./BlogPost.vue";
import { ref, onMounted, reactive } from "vue";
import Home from "./pages/home.vue";
import Program from "./pages/program.vue";
import Foreign from "./pages/foreign.vue";
import Ai from "@/views/home/pages/ai/index.vue";
import Header from "@/views/header/index.vue";


const isCollapse = ref(false)

const activeIndex = ref('1')
function handleSelect(key: string, keyPath: string[]) {
  console.log(key, keyPath)
}

const items = reactive([
  {
    name: "Vue3",
    // icon: IconMenu,
    index: 1,
    children: [
      {
        name: "指南",
        path: "/vue3/guide",
      },
      {
        name: "互动教程",
        path: "/vue3/examples",
        // icon: Setting,
        /* children: [
          {
            name: "处理用户输入",
            path: "/handlingInput",
          },
        ], */
      },
    ],
  },
  {
    name: "前端",
    // icon: Message,
    index: 2,
    children: [
      {
        name: "typescript",
        path: "/typescript",
        // icon: Setting,
      },
      {
        name: "设计模式",
        path: "/desighPattern",
      },
      {
        name: "Mock",
        path: "/mockjs",
      },
      {
        name: "图形图像",
        path: "/picture",
      },
      {
        name: "可视化",
        path: "/visual",
      },
      {
        name: "Navigator two two",
        path: "/testtwo",
        // icon: Setting,
      },
      // {
      //   name: "mockJs",
      //   path: "/mockjs",
      // },
    ],
  },
  {
    name: "算法",
    // icon: Message,
    index: 2_1,
    children: [
      {
        name: "prefix",
        path: "/prefix",
        // icon: Setting,
      },
    ],
  },
  {
    name: "ai",
    index: 3,
    children: [
      {
        name: "ai",
        path: "/ai-nav",
      },
      {
        name: "AI导航1",
        path: "/ai-nav",
      },
      {
        name: "AI助手",
        path: "/ai-assistant",
      },
      // path: "/ai",
    ],
    // icon: Message,
  },
  {
    name: "用户权限",
    children: [
      {
        name: "用户列表",
        path: "/user/user",
      },
      {
        name: "系统配置",
        path: "/user/role",
      },
    ],
  },
  {
    name: "admin",
    // index: 3,
    children: [
      {
        name: "ai-admin",
        path: "/ai-admin",
      },
      {
        name: "系统配置",
        path: "/config",
      },
      // path: "/ai",
    ],
    // icon: Message,
  },
  {
    name: "功能",
    index: 4,
    path: "/functions",
    children: [
      {
        name: "pdf",
        path: "/pdf",
      },
      {
        name: "file",
        path: "/file",
      },
      {
        name: "多级表头",
        path: "/multiLevelHeader",
      },
      {
        name: "公共菜单",
        path: "/commonMenus",
      },
      // path: "/ai",
    ],
    // icon: Message,
  },
  {
    name: "产品",
    index: 5,
    path: "/product",
    children: [
      {
        name: "AI导航",
        path: "/aiNav",
      },{
        name: "AI详情页",
        path: "/about",
      },
      // path: "/ai",
    ],
    // icon: Message,
  },
  {
    name: "移动端",
    path: "/testfive",
    // icon: Message,
  },
]);

const activeIndex2 = ref("1");

const toVue3 = function () {
  router.push("/vue3");
};

const toLogin = function () {
  router.push("/login");
};

const input = ref(null);
const value = ref(null);
onMounted(() => {
  // input.value.focus();
  test();
});

const child = ref(null);
// const about = ref(null);
function test() {
  /* console.log("child:", child.value.a);
  console.log("child:", child.value.b); */
}

const posts = ref([
  { id: 1, title: "vue" },
  { id: 2, title: "React" },
  { id: 2, title: "Ai" },
]);

let postFontSize = ref(1);

const currentTab = ref(Home);
const tabs: any = {
  Home,
  Program,
  // Ai,
  // Draw,
  Foreign,
  Ai,
};

function  onExit() {
  console.log("退出登录")
}

</script>
<style lang="scss" scoped>
.home {
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }

  .header-box {
    display: flex;
    justify-content: space-between;
  }

  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
</style>
