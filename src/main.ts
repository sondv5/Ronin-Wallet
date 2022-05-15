import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/vi';
import './components/index';
import './extensions/index';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/global.css';
import { $http } from './core/http';

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

$http.config().then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
