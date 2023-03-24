<template>
  <div>
    <el-container>
      <el-header>
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
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <template v-for="v in items" :key="v.url">
              <el-sub-menu v-if="v.children" :index="v.index">
                <template #title>
                  <!-- <el-icon><component :is="v.icon"></component></el-icon -->
                  >{{ v.name }}
                </template>
                <el-menu-item
                  v-for="vitem in v.children"
                  :key="vitem.url"
                  :index="vitem.url"
                >
                  <template #title>
                    <!-- <el-icon><component :is="vitem.icon"></component></el-icon -->
                    >{{ vitem.name }}
                  </template>
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="v.url">
                <template #title>
                  <!-- <el-icon><component :is="v.icon"></component></el-icon -->
                  >{{ v.name }}
                </template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <div>
            <Header></Header>
          </div>
          <div class="demo">
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
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import router from "../../router/index.js";
import Child from "./child.vue";
import about from "./about.vue";
import BlogPost from "./BlogPost.vue";
import { ref, onMounted, reactive } from "vue";
import Home from "./pages/home.vue";
import Program from "./pages/program.vue";
import Foreign from "./pages/foreign.vue";
import Header from "@/views/header/index.vue";

const items = reactive([
  {
    name: "Navigator",
    // icon: IconMenu,
    index: 1,
    children: [
      {
        name: "Vue3",
        url: "/vue3",
      },
      {
        name: "Navigator four",
        url: "/testfour",
        // icon: Setting,
      },
    ],
  },
  {
    name: "Navigator two",
    // icon: Message,
    index: 2,
    children: [
      {
        name: "Navigator two two",
        url: "/testtwo",
        // icon: Setting,
      },
    ],
  },
  {
    name: "Navigator three",
    url: "/testthree",
    // icon: Message,
  },
  {
    name: "Navigator five",
    url: "/testfive",
    // icon: Message,
  },
]);

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const toVue3 = function () {
  router.push("/vue3");
};

const input = ref(null);
const value = ref(null);
onMounted(() => {
  debugger;
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
  Foreign,
};
</script>
<style>
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
</style>
