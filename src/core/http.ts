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

async function request(reqInfo: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  silent?: boolean;
}) {
  if (!reqInfo.silent) {
    store.commit('incrementLoading');
  }
  return axios
    .request({
      method: reqInfo.method,
      data: reqInfo.data,
      url: baseUrl + reqInfo.url,
    })
    .then((rp) => rp.data)
    .finally(() => {
      if (!reqInfo.silent) {
        store.commit('decrementLoading');
      }
    });
}

function get(url: string, data?: any, silent = false) {
  return request({
    method: 'GET',
    url,
    data,
    silent,
  });
}

function post(url: string, data?: any, silent = false) {
  return request({
    method: 'POST',
    url,
    data,
    silent,
  });
}

export const $http = {
  config,
  loadFile,
  get,
  post,
};
