import Vue from 'vue';
import VueRouter from 'vue-router';
import UnLock from '../views/unlock/unlock.vue';
import Account from '../views/account/account.vue';
import Send from '../views/send/send.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Unlock',
    component: UnLock,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/send',
    name: 'Send',
    component: Send,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.fullPath === '/' && store.getters.account) {
    next('/account');
  } else if (to.fullPath !== '/' && !store.getters.account) {
    next('/');
  } else {
    next();
  }
});

export default router;
