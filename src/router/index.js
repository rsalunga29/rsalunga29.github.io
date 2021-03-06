import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from 'vue-gtag'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Articles from '@/pages/Articles'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: About,
  },

  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

Vue.use(VueGtag, {
  config: { id: 'UA-159906832-1' }
}, router)

export default router
