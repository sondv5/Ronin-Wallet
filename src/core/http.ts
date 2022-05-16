import store from '@/store';
import axios from 'axios';

let baseUrl = '';

async function loadFile(path: string) {
  const obj = (await axios.get(path)).data;
  return obj;
}

async function config() {
  await loadFile('config.json').then((data) => {
    baseUrl = data.BACKEND_URL;
  });
}

async function get(url: string, data?: any, silent = false) {
  if (silent === false) {
    store.commit('incrementLoading');
  }
  return axios
    .request({
      method: 'GET',
      data: data,
      url: baseUrl + url,
    })
    .then((rp) => rp.data)
    .finally(() => {
      if (silent === false) {
        store.commit('decrementLoading');
      }
    });
}

async function post(url: string, data?: any, silent = false) {
  if (silent === false) {
    store.commit('incrementLoading');
  }
  return axios
    .request({
      method: 'POST',
      data: data,
      url: baseUrl + url,
    })
    .then((rp) => rp.data)
    .finally(() => {
      if (silent === false) {
        store.commit('decrementLoading');
      }
    });
}

export const $http = {
  config,
  loadFile,
  get,
  post,
};
