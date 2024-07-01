<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
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
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router/index.js";
import { ref, onMounted, reactive } from "vue";

const items = reactive([
  {
    name: "基础",
    // icon: IconMenu,
    index: 1,
    children: [
      {
        name: "处理用户输入",
        path: "/vue3/examples/handlingInput",
        // icon: Setting,
        /* children: [
          {
            name: "处理用户输入",
            path: "/handlingInput",
          },
        ], */
      },
      {
        name: "Attribute 绑定",
        path: "/vue3/examples/attributeBind",
      },
      {
        name: "简单组件",
        path: "/vue3/examples/simpleConponent",
      },
      {
        name: "markdown编辑器",
        path: "/vue3/examples/markdownEditor",
      },
      {
        name: "获取数据",
        path: "/vue3/examples/getData",
      },
      {
        name: "CRUD",
        path: "/vue3/examples/crud",
      },
      {
        name: "声明式渲染",
        path: "/vue3/examples/declareRender",
      },
    ],
  },
  {
    name: "实战",
    // icon: Message,
    index: 2,
    children: [
      {
        name: "Navigator two two",
        path: "/testtwo",
        // icon: Setting,
      },
    ],
  },
  {
    name: "7 GUIs",
    path: "/testthree",
    // icon: Message,
  },
  /* {
    name: "7 GUIs",
    path: "/testfive",
  }, */
]);

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
