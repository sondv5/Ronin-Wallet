import Vue from 'vue'
import VueRouter from 'vue-router'
import UnLock from '../views/unlock/unlock.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'unlock',
    component: UnLock
  },
  // {
  //   path: '/component',
  //   name: 'component',
  //   component: () => import('../components/component-template/component-template.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
