import Vue from 'vue'
import VueRouter from 'vue-router'
import Standby from '../views/Standby.vue'
import Providers from '../views/Providers.vue';
import DetailProvider from '../views/DetailProvider.vue';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Standby',
    component: Standby
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
  },
  {
    path: '/providers/',
    name: 'providers',
    component: Providers,
  },
  {
    path: '/providerdetail/:ID',
    name: 'providerdetail',
    props: true,
    component: DetailProvider
  },
  
]

const router = new VueRouter({
  routes
})

export default router
