import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
console.log(process.env.NODE_ENV)
const router = new Router({
  // mode: 'history',
  // base: '/vue2/',
  routes: [
    {
      path: '/vue2',
      name: 'home',
      component: Home
    },
    {
      path: '/vue2/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

export const unBeforeEach = router.beforeEach((to, from, next) => {
  console.log('vue2 路由守卫')
  next()
})

export default router
