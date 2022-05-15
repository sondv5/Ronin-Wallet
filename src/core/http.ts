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

async function get(url: string, data?: any) {
  return axios
    .request({
      method: 'GET',
      data: data,
      url: baseUrl + url,
    })
    .then((rp) => rp.data);
}

async function post(url: string, data: any) {
  return axios
    .request({
      method: 'POST',
      data: data,
      url: baseUrl + url,
    })
    .then((rp) => rp.data);
}

export const $http = {
  config,
  loadFile,
  get,
  post,
};
