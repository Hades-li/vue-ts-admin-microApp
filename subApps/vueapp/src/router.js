import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: '/base/',
  routes: [
    {
      path: '/vue1',
      name: 'home',
      component: Home
    },
    {
      path: '/vue1/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

export const unBeforeEach = router.beforeEach((to, from, next) => {
  console.log('vue1 路由守卫')
  next()
})


export default router
