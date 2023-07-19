import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      name: "index",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/vue3",
      name: "vue3",
      // component: () => import("../views/vue3/index.vue"),
      children: [
        {
          name: "指南",
          path: "guide",
          component: () => import("../views/vue3/guide/index.vue"),
          children: [
            {
              path: "typescript",
              name: "总览",
              component: () =>
                import("../views/vue3/guide/typescript/index.vue"),
            },
            {
              path: "compositonApi",
              name: "TypeScript 与组合式 API",
              component: () =>
                import(
                  "../views/vue3/guide/typescript/compositonApi/index.vue"
                ),
            },
            {
              path: "optionApi",
              name: "TypeScript 与选项式 API",
              component: () =>
                import("../views/vue3/guide/typescript/optionApi/index.vue"),
            },
          ],
          // icon: Setting,
          /* children: [
            {
              path: "info",
              name: "info",
              component: () => import("../views/InfoView.vue"),
            },
          ], */
        },
        /* 互动教程 start */
        {
          name: "互动教程",
          path: "examples",
          component: () => import("../views/vue3/examples/index.vue"),
          // icon: Setting,
          children: [
            {
              path: "handlingInput",
              name: "处理用户输入",
              component: () =>
                import("../views/vue3/examples/handlingInput.vue"),
            },
            {
              path: "attributeBind",
              name: "Attribute 绑定",
              component: () =>
                import("../views/vue3/examples/attributeBind.vue"),
            },
            {
              path: "simpleConponent",
              name: "简单组件",
              component: () =>
                import("../views/vue3/examples/simpleConponent.vue"),
            },
            {
              path: "markdownEditor",
              name: "markdown编辑器",
              component: () =>
                import("../views/vue3/examples/markdownEditor/index.vue"),
            },
            {
              path: "getData",
              name: "获取数据",
              component: () =>
                import("../views/vue3/examples/getData/index.vue"),
            },
            {
              name: "CRUD",
              path: "crud",
              component: () => import("../views/vue3/examples/crud/index.vue"),
            },
            /* {
              path: "attributeBind",
              name: "Attribute 绑定",
              component: () => import("../views/vue3/examples/index2.vue"),
            }, */
          ],
        },
        /* {
          name: "处理用户输入",
          path: "handlingInput",
          component: () => import("../views/vue3/examples/handlingInput.vue"),
          // icon: Setting,
        }, */

        /* 互动教程 end */
      ],
    },
    {
      path: "/javascript",
      name: "/javascript",
      children: [
        {
          name: "typescript",
          path: "/typescript",
          component: () => import("../views/javascript/typescript/index.vue"),
        },{
          name: "desighPattern",
          path: "/desighPattern",
          component: () => import("../views/javascript/desigh-pattern/index.vue"),
        },
      ],
    },
    {
      path: "/ai",
      name: "/ai",
      children: [
        {
          name: "ai导航",
          path: "/ai-nav",
          component: () => import("../views/ai/ai-nav/index.vue"),
        },{
          name: "chatGpt",
          path: "/chatgpt",
          component: () => import("../views/ai/ai-nav/third-page/chatgpt/index.vue"),
        },
      ],
    },
    /* {
      path: "/examples",
      name: "Examples",
      component: () => import("../views/vue3/examples/index.vue"),
    }, */
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/TestReactive",
      name: "Reactive",
      component: () => import("../views/demos/TestReactive/Test3Reactive.vue"),
    },
    {
      path: "/TestReactive2",
      name: "Reactive2",
      component: () => import("../views/demos/TestReactive/Test3Reactive2.vue"),
    },
    {
      path: "/TestReactive3",
      name: "深层响应性",
      component: () => import("../views/demos/TestReactive/Test3Reactive3.vue"),
    },
    {
      path: "/Test4Computed",
      name: "计算属性",
      component: () => import("../views/demos/base/Test4Computed.vue"),
    },
    {
      path: "/Test5ClassBindCss",
      name: "Class 与 Style 绑定",
      component: () => import("../views/demos/base/Test5ClassBindCss.vue"),
    },
    {
      path: "/Test6ConditionRender",
      name: "条件渲染",
      component: () => import("../views/demos/base/Test6ConditionRender.vue"),
    },
    {
      path: "/Test7ListRender",
      name: "列表渲染",
      component: () => import("../views/demos/base/Test7ListRender.vue"),
    },
    {
      path: "/Test8EventHandle",
      name: "事件处理",
      component: () => import("../views/demos/base/Test8EventHandle.vue"),
    },
    {
      path: "/Test9FormInputBind",
      name: "表单输入绑定",
      component: () => import("../views/demos/base/Test9FormInputBind.vue"),
    },
    {
      path: "/Test9Listener",
      name: "侦听器",
      component: () => import("../views/demos/base/Test9Listener.vue"),
    },
    {
      path: "/Ts8EventHandle",
      name: "标注类型",
      component: () => import("../views/demos/ts/Ts8EventHandle.vue"),
    },
    {
      path: "/profile",
      name: "个人中心",
      component: () => import("@/views/profile/index.vue"),
    },
    {
      path: "/login",
      name: "登录",
      component: () => import("@/views/profile/login/index.vue"),
    },
  ],
});

export default router;
