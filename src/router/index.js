import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Articles from '@/pages/Articles'
// import VueGtag from 'vue-gtag'

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
  }
]

// Vue.use(VueGtag, {
//   config: { id: 'UA-159906832-1' }
// }, router)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
