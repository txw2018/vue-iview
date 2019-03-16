<!--  -->
<template>
  <div class="foundaddress">
      <div class="message">
      <Alert  closable>您当前所在城市:{{message}}</Alert>
      </div>
      <div class="search">
         <Input search enter-button placeholder="Search..." />
      </div>
      <div id="container"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    };
  },
  components: {},

  computed: {},

  mounted () {
    new AMap.Map('container', {
           // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
      timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
      buttonPosition: 'RB'

    });
    AMap.plugin('AMap.CitySearch', () => {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              // console.log(result)
          let {province, city} = result;
          this.message = `${province}${city}`;
        }
      });
    });
  },

  methods: {}
};
</script>
<style lang='stylus' scoped>
.foundaddress
  width 100%
  height 100%
  position relative
  .search
    width 50%
    position absolute
    right 0
    left 0
    top 50px
    margin 0 auto
  .message
    position absolute
    height 100px
    top 0
    right 0
    mix-width 30%
    z-index 99
#container
  width 100%
  height 100%

</style>
