import { createRouter, createWebHistory } from 'vue-router'
import { PAGES } from '@/shared/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: PAGES.LANDING,
      component: () => import('@/views/MainLayout.vue'),
      children: [
        {
          path: 'login',
          name: PAGES.LOGIN,
          component: () => import('@/views/Login/Login.vue')
        }
      ]
    }
  ]
})

export default router
