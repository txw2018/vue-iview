// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
// const Random = Mock.Random;
const menuList = [{
  id: 1,
  menu_name: '设置',
  menu_url: 'setting',
  parent_id: 0
},
{
  id: 2,
  menu_name: '权限设置',
  menu_url: '/settingpermission',
  parent_id: 1
},
{
  id: 3,
  menu_name: '统计',
  menu_url: 'statistical',
  parent_id: 0
},
{
  id: 4,
  menu_name: '用户统计',
  menu_url: '/statisticaluser',
  parent_id: 3
},
{
  id: 5,
  menu_name: '地图',
  menu_url: 'map',
  parent_id: 0
},
{
  id: 6,
  menu_name: '查找地址',
  menu_url: '/searchaddress',
  parent_id: 5
},
{
  id: 7,
  menu_name: '公交车查询',
  menu_url: '/searchbus',
  parent_id: 5
},
{
  id: 8,
  menu_name: '组件',
  menu_url: 'components',
  parent_id: 0
},
{
  id: 9,
  menu_name: '组件',
  menu_url: '/components',
  parent_id: 8
}];
const postMenus = () => {
  return {
    menuList
  };
};
// Mock.mock( url, post/get , 返回的数据)；
const munus = Mock.mock('http://www.mockapi.com/api/menus/index', 'post', postMenus);
export { munus };
