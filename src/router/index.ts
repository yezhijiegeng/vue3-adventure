import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Home from "../views/home/index.vue";
import { title } from "process";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: () => import('../views/home/index.vue') ,
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
            {
              name: "declareRender",
              path: "declareRender",
              meta: {
                title: "声明式渲染",
              },
              component: () =>
                import("../views/vue3/examples/declareRender/index.vue"),
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
      name: "vue",
      path: "/vue",
      component: () => import("../views/vue/index.vue"),
      children: [
        {
          path: "vueUse",
          name: "vueUse",
          component: () => import("../views/vue/vueUse/index.vue"),
        },
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
        },
        {
          name: "visual",
          path: "/visual",
          component: () => import("../views/javascript/visual/index.vue"),
        },
        {
          name: "desighPattern",
          path: "/desighPattern",
          component: () =>
            import("../views/javascript/desigh-pattern/index.vue"),
        },
      ],
    },
    {
      path: "/algorithm",
      name: "algorithm",
      children: [
        {
          name: "prefix",
          path: "/prefix",
          component: () => import("../views/algorithm/prefix/index.vue"),
        },
      ],
    },
    {
      path: "/front",
      name: "/front",
      children: [
        {
          name: "picture",
          path: "/picture",
          component: () => import("../views/front/picture"),
        },
      ],
    },
    {
      path: "/ai",
      name: "ai",
      component: () => import("../views/ai/index.vue"),
      children: [
        {
          name: "ai导航",
          path: "/ai-nav",
          component: () => import("../views/ai/ai-nav/index.vue"),
        },
        {
          name: "AI助手",
          path: "/ai-assistant",
          component: () => import("../views/ai/ai-assistant/index.vue"),
        },
        {
          name: "chatGpt",
          path: "/chatgpt",
          component: () =>
            import("../views/ai/ai-nav/third-page/chatgpt/index.vue"),
        },
        {
          name: "聊天",
          path: "/chat",
          component: () => import("../views/ai/chat/index.vue"),
        },
        {
          name: "draw", // 画画
          path: "/draw",
          component: () => import("../views/ai/draw/index.vue"),
          children: [
            {
              name: "model", // 模型
              path: "model",
              component: () => import("../views/ai/draw/models/index.vue"),
            },
            {
              name: "drawCreate", // 绘画创作
              path: "drawCreate",
              component: () => import("../views/ai/draw/create/index.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/index.vue"),
      children: [
        {
          name: "ai-admin", // ai 导航管理
          path: "/ai-admin",
          component: () => import("../views/admin/ai-admin/index.vue"),
        },
        {
          name: "config", // 系统配置
          path: "/config",
          meta: {
            title: "系统配置",
          },
          component: () => import("../views/admin/config/index.vue"),
        },
      ],
    },
    {
      name: "functions",
      path: "/functions",
      component: () => import("../views/functions/index.vue"),
      meta: {
        title: "功能",
      },
      children: [
        {
          name: "pdf",
          path: "/pdf",
          component: () => import("../views/functions/pdf/index.vue"),
        },
        {
          name: "file",
          path: "/file",
          component: () => import("../views/functions/file/index.vue"),
        },
        {
          name: "multiLevelHeader",
          path: "/multiLevelHeader",
          meta: {
            title: "多级表头",
          },
          component: () =>
            import("../views/functions/multiLevelHeader/index.vue"),
        },
        {
          name: "commonMenus",
          path: "/commonMenus",
          meta: {
            title: "公共菜单",
          },
          component: () =>
            import("../views/functions/commonMenus/index.vue"),
        },
      ],
    },
    {
      name: "product",
      path: "/product",
      // component: () => import("../views/functions/index.vue"),
      meta: {
        title: "产品",
      },
      children: [
        {
          name: "pdf",
          path: "/aiNav",
          meta: {
            title: "AI导航",
          },
          component: () => import("../views/product/aiNav/index.vue"),
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
      path: "/login2",
      name: "登录2",
      component: () => import("@/views/profile/login/index.vue"),
    },
    {
      path: "/login",
      name: "登录",
      component: () => import("@/views/login/index.vue"),
    },
  ],
});

export default router;
