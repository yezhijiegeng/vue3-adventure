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
      component: () => import('../views/demos/TestReactive/TestReactive.vue')
    },
    {
      path: '/TestReactive2',
      name: 'Reactive2',
      component: () => import('../views/demos/TestReactive/TestReactive2.vue')
    },
    {
      path: '/TestReactive3',
      name: '深层响应性',
      component: () => import('../views/demos/TestReactive/TestReactive3.vue')
    }
  ]
})

export default router
