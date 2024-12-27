import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PostsView from '@/views/PostsView.vue'
import LikesView from '@/views/LikesView.vue'
import NewsView from '@/views/NewsView.vue'
import PeopleView from '@/views/PeopleView.vue'
import HomeFooter from '@/views/HomeFooter.vue'
// import AboutView from '@/views/AboutView.vue'
// import BlogView from '@/views/BlogView.vue'
// import NotFound from '@/views/NotFound.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      Sidebar: NewsView,
      Footer: HomeFooter
    }
  },
  {
    path: '/:id',
    components: {
      default: ProfileView,
      Sidebar: PeopleView,
      Footer: HomeFooter
    },
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
