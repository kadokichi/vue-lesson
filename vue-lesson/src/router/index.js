import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    }
  ]
})
export default router
