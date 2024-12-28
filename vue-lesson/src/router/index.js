import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { transition: 'fade' },
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      meta: { requireAuth: true, transition: 'slide' },
      component: BlogView,
      beforeEnter() {
        console.log('beforeEnter')
      }
    }
  ]
})
router.beforeEach(() => {
  // if (to.meta.requireAuth && !isLoggin) {
  //   return '/'
  // }
  console.log('beforeEach')
})
router.beforeResolve(() => {
  console.log('beforeResolve')
})
router.afterEach(() => {
  console.log('afterEach')
})
export default router
