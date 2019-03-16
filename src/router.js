import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      children: [
        {
          path: '/settingpermission',
          name: 'SettingPermission',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/setting/SettingPermission')
        },
        {
          path: '/statisticaluser',
          name: 'StatisticalUser',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/statistical/StatisticalUser.vue')
        },
        {
          path: '/searchaddress',
          name: 'SearchAddress',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/map/SearchAddress.vue')
        },
        {
          path: '/searchbus',
          name: 'SearchBus',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/map/SearchBus.vue')
        },
        {
          path: '/components',
          name: 'Components',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/components/Components.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'abologinut',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
});
