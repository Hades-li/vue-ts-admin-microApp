import Vue from 'vue';
import Router from 'vue-router';
import Framework from './Framework';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Framework',
      component: Framework,
    },
  ],
});
