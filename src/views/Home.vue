<template>
  <div class="home">
    <HeaderGroup/>
    <div class="content">
      <div class="left-menus">
        <Menus aaa = '1'></Menus>
      </div>
      <div class="right-conetnt">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HeaderGroup from '@/components/HeaderGroup.vue';
import Menus from '@/views/Menus';

export default {
  name: 'home',
  components: {
    HeaderGroup,
    Menus
  }
};
</script>
<style lang="stylus" scoped>
.content
  width 100%
  height calc(100vh - 60px)
  overflow hidden
.left-menus
  width 240px
  height 100%
  background #515a6e
  float left
.right-conetnt
  width calc(100% - 240px)
  height 100%
  float left
</style>

