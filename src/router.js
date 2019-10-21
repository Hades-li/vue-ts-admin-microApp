import Vue from 'vue';
import Router from 'vue-router';
import Framework from './Framework';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Framework',
      component: Framework,
    },
    {
      path: '/vue1',
      name: 'Framework',
      component: Framework,
    },
    {
      path: '/vue1/about',
      name: 'Framework',
      component: Framework,
    },
    {
      path: '/vue2',
      name: 'Framework',
      component: Framework,
    },
    {
      path: '/vue2/about',
      name: 'Framework',
      component: Framework,
    },
  ]
});
