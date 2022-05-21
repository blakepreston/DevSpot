import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogPage from '../views/BlogPage.vue'
import Publish from '../views/Publish.vue'
import RangeFinder from '../views/RangeFinder.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blogpage/:id',
    name: 'BlogPage',
    component: BlogPage
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/RangeFinder',
    name: 'RangeFinder',
    component: RangeFinder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
