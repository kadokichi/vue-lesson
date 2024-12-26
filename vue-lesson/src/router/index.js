import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
//import NotFound from '@/views/NotFound.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    alias: ['/me', '/kdy'],
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog/:id(\\d+)+',
    alias: '/article/:id',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    redirect: '/',
    //component: NotFound
  }]
})
export default router
