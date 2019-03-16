// import getData from '../config/api'
import axios from 'axios';

export const postMenus = () => axios.post('http://www.mockapi.com/api/menus/index');
export const postKline = () => axios.post('http://www.mockapi.com/api/kline/index');
