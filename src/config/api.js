import axios from './http';
export default function getData (url, params = {}, type = 'GET') {
  if(type === 'GET') {
    return axios.get(url);
  }else{
    return axios.post(url, params);
  }
}
