import Vue from 'vue';
import { $http } from '../core/http';

declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof $http;
  }
}

Vue.prototype.$http = $http;
