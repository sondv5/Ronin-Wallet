import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    $isLoading: 0,
    account: null,
  },
  mutations: {
    incrementLoading(state) {
      if (state.$isLoading < 0) {
        state.$isLoading = 1;
      } else {
        state.$isLoading += 1;
      }
    },
    decrementLoading(state) {
      if (state.$isLoading > 0) {
        state.$isLoading -= 1;
      }
    },
    setAccount(state, value) {
      state.account = value;
    },
  },
  getters: {
    isLoading(state) {
      return state.$isLoading > 0;
    },
    account(state) {
      return state.account;
    },
  },
});
