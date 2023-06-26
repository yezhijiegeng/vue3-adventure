<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HelloWorld msg="You did it!" class="danger" />
      <nav>
        <!-- <RouterLink to="/home">{{ t("home") }}</RouterLink> -->
        <RouterLink to="/index">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/info">info</RouterLink>
      </nav>
      <nav>
        响应式基础：
        <RouterLink to="/TestReactive">Reactive</RouterLink>
        <RouterLink to="/TestReactive2">Reactive-setup</RouterLink>
        <RouterLink to="/TestReactive3">深层响应性</RouterLink>
        <RouterLink to="/Test4Computed">计算属性</RouterLink>
        <RouterLink to="/Test5ClassBindCss">Class 与 Style 绑定</RouterLink>
        <RouterLink to="/Test6ConditionRender">条件渲染</RouterLink>
        <RouterLink to="/Test7ListRender">列表渲染</RouterLink>
        <RouterLink to="/Test8EventHandle">事件处理</RouterLink>
        <RouterLink to="/Test9FormInputBind">表单输入绑定</RouterLink>
        <ul>
          <li>
            <RouterLink to="/Test9Listener">侦听器:今天吃夜宵吗？</RouterLink>
          </li>
        </ul>
      </nav>
      <nav>
        Typescript：
        <RouterLink to="/Test8FormInputBind">为事件处理函数标注类型</RouterLink>
      </nav>
    </div>
  </header>
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
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "../../../components/HelloWorld.vue";
import router from "@/router/index.js";
import { ref, onMounted, reactive } from "vue";

const items = reactive([
  {
    name: "基础",
    // icon: IconMenu,
    index: 1,
    /* children: [
      {
        name: "处理用户输入",
        path: "/vue3/examples/handlingInput",
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
    ], */
  },
  {
    name: "TS",
    children: [
      {
        name: "总览",
        path: "/vue3/guide/typescript",
      },
      {
        name: "TypeScript 与组合式 API",
        path: "/vue3/guide/compositonApi",
      },
      {
        name: "TypeScript 与选项式 API",
        path: "/vue3/guide/optionApi",
      },
    ],
  },
  {
    name: "7 GUIs",
    path: "/testthree",
  },
  /* {
    name: "7 GUIs",
    path: "/testfive",
  }, */
]);
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .danger {
    color: red;
  }
}
</style>
