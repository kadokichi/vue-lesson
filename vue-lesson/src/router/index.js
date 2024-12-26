import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PostsView from '@/views/PostsView.vue'
import LikesView from '@/views/LikesView.vue'
// import AboutView from '@/views/AboutView.vue'
// import BlogView from '@/views/BlogView.vue'
// import NotFound from '@/views/NotFound.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    component: ProfileView,
    children: [{
      path: '',
      name: 'posts',
      component: PostsView
    },
    {
      path: 'likes',
      name: 'likes',
      component: LikesView
    }]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },
  // {
  //   path: '/blog/:id(\\d+)+',
  //   name: 'blog',
  //   component: BlogView
  // },
  // {
  //   path: '/:catchAll(.*)*',
  //   name: 'notFound',
  //   props: true,
  //   component: NotFound
  // }
  ]
})
export default router
