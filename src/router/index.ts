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
      name: "index",
      component: () => import("../views/vue3/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/info",
      name: "info",
      component: () => import("../views/InfoView.vue"),
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
  ],
});

export default router;
