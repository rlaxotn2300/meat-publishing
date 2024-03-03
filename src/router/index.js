import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LP1.vue')
    },
    {
      path: '/LP6',
      name: 'LP6',
      component: () => import('../views/LP6.vue')
    },
    {
      path: '/LP9',
      name: 'LP9',
      component: () => import('../views/LP9.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../components/modal/MarketingModal.vue')
    },
    {
      path: '/modal2',
      name: 'modal2',
      component: () => import('../components/modal/SignUpModal.vue')
    },
  ]
})

export default router
