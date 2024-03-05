import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LP1',
      component: () => import('@/views/LP/LP1.vue')
    },
    {
      path: '/LP6',
      name: 'LP6',
      component: () => import('@/views/LP/LP6.vue')
    },
    {
      path: '/LP7/1',
      name: 'LP7/1',
      component: () => import('@/views/LP/LP7/SignUpSuccess.vue')
    },
    {
      path: '/LP7/2',
      name: 'LP7/2',
      component: () => import('@/views/LP/LP7/BuildingNicname.vue')
    },
    {
      path: '/LP7/3',
      name: 'LP7/3',
      component: () => import('@/views/LP/LP7/AddButton.vue')
    },    {
      path: '/LP9',
      name: 'LP9',
      component: () => import('@/views/LP/LP9.vue')
    },
    {
      path: '/PD20',
      name: 'PD20',
      component: () => import('@/views/PD/PD20.vue')
    },
    {
      path: '/PD22',
      name: 'PD22',
      component: () => import('@/views/PD/PD22.vue')
    },
    {
      path: '/PD24',
      name: 'PD24',
      component: () => import('@/views/PD/PD24.vue')
    },
    {
      path: '/PD26',
      name: 'PD26',
      component: () => import('@/views/PD/PD26.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../components/modal/MarketingModal.vue')
    },
  ]
})

export default router
