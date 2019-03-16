import axios from 'axios';
// import store from '../store';

//配置axios的默认URL
// axios.defaults.baseURL = '/api'//本地环境
axios.defaults.baseURL = 'http://www.mockapi.com/api'//线上

//配置允许跨域携带cookie
axios.defaults.withCredentials = false;
//配置超时时间
axios.defaults.timeout = 100000;
//请求拦截,设置统一的header
axios.interceptors.request.use(config => {
    // store.dispatch('setLoading',true)
  if(localStorage.jwtToken) {
    config.headers.Authorization = localStorage.jwtToken;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

//响应拦截
axios.interceptors.response.use(response => {
    // store.dispatch('setLoading',false)
  return response;
}, error => {
     // 非200请求报错
    // store.dispatch('setLoading',false)
  return Promise.reject(error);
});
export default axios;
