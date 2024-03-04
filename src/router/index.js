import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LP1',
      component: () => import('../views/LP1~9/LP1.vue')
    },
    {
      path: '/LP6',
      name: 'LP6',
      component: () => import('../views/LP1~9/LP6.vue')
    },
    {
      path: '/LP7/1',
      name: 'LP7/1',
      component: () => import('@/views/LP1~9/LP7/SignUpSuccess.vue')
    },
    {
      path: '/LP7/2',
      name: 'LP7/2',
      component: () => import('@/views/LP1~9/LP7/BuildingNicname.vue')
    },
    {
      path: '/LP7/3',
      name: 'LP7/3',
      component: () => import('@/views/LP1~9/LP7/AddButton.vue')
    },    {
      path: '/LP9',
      name: 'LP9',
      component: () => import('@/views/LP1~9/LP9.vue')
    },
    {
      path: '/PD20',
      name: 'PD20',
      component: () => import('../views/PD20~31/PD20.vue')
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
