<!-- menus -->
<template>
    <div class="menus">
      <Row>
        <Col span="8">
            <Menu :theme="theme2">
                <Submenu v-for="(item,i) in menus" :key="i" :name="++i">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        {{item.menu_name}}
                    </template>
                    <template v-if="item.children.length>0">
                     <MenuItem
                        v-for="(value,j) in item.children"
                        :key="j"
                        :name="childrenIndex(i,j,value)">
                        <router-link :to="value.menu_url">{{value.menu_name}}</router-link>
                      </MenuItem>
                    </template>
                </Submenu>
            </Menu>
        </Col>
      </Row>
    </div>
</template>
<script>
import { postMenus } from '../service/getData.js';
export default {
  data () {
    return {
      theme2: 'light',
      menus: [

      ]
    };
  },
  props: {
  },
  methods: {
    getMenus () {
      postMenus()
          .then(res => {
            this.menus = this.getTree(res.data.menuList);
            // console.log(this.menus);
          });
    },
    getTree (list, parentId = 0) {
      let newTree = [];
      // console.log(list);
      list.forEach(item => {
        if(item.parent_id === parentId) {
          let obj = {};
          obj.menu_name = item.menu_name;
          obj.id = item.id;
          obj.parent_id = parentId;
          obj.menu_url = item.menu_url;
          obj.children = this.getTree(list, item.id);
          newTree.push(obj);
        }
      });
      return newTree;
    },
    childrenIndex (i, j, value) {
        // console.log(i, ++j,value)
      return `${i}-${++j}`;
    }
  },
  created () {
    this.getMenus();
  }
};
</script>
<style lang='stylus' scoped>
</style>
