import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'index',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue')
    },
    {
      path: '/TestReactive',
      name: 'Reactive',
      component: () => import('../views/demos/TestReactive/Test3Reactive.vue')
    },
    {
      path: '/TestReactive2',
      name: 'Reactive2',
      component: () => import('../views/demos/TestReactive/Test3Reactive2.vue')
    },
    {
      path: '/TestReactive3',
      name: '深层响应性',
      component: () => import('../views/demos/TestReactive/Test3Reactive3.vue')
    },
    {
      path: '/Test4Computed',
      name: '计算属性',
      component: () => import('../views/demos/base/Test4Computed.vue')
    },
    {
      path: '/Test5ClassBindCss',
      name: 'Class 与 Style 绑定',
      component: () => import('../views/demos/base/Test5ClassBindCss.vue')
    },
    {
      path: '/Test6ConditionRender',
      name: '条件渲染',
      component: () => import('../views/demos/base/Test6ConditionRender.vue')
    },
    {
      path: '/Test7ListRender',
      name: '列表渲染',
      component: () => import('../views/demos/base/Test7ListRender.vue')
    }
  ]
})

export default router
