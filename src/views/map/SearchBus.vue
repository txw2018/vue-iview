<!-- 公交车查询 -->
<template>
  <div class="foundaddress">
      <div class="search">
         <Input
            v-model="address"
            @on-change="addressChange"
            search
            enter-button
            placeholder="Search..."
            />
            <ul v-if="stationList.length>0" v-show="status">
              <li v-for="(item,index) in stationList" :key="index" @click="chooseAddress(item.name)">{{item.name}}</li>
            </ul>

      </div>
      <div id="container"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: '', //地图初始化的对象
      status: false, //显示匹配到的地址列表状态
      address: '', //输入的地址
      initAddress: '', //初始化得到本地地址
      currentAddress: '',
      stationList: [], //匹配到的地址列表
      lat: '', //维度
      lng: ''//经度
    };
  },
  components: {},

  computed: {},

  mounted () {
    this.initMap();
  },
  methods: {
      //选择地址
    chooseAddress (value) {
      let _this = this;
      console.log(_this.currentAddress, value);
      this.status = false;
      // AMap.plugin(["AMap.Transfer"], () => {
      //     var drivingOption = {
      //         map:this.map,
      //         city: _this.initAddress,
      //         policy: AMap.TransferPolicy.LEAST_TIME
      //     };
      //     var transfer = new AMap.Transfer(drivingOption); //构造驾车导航类
      //     //根据起终点坐标规划驾车路线
      //     transfer.search([{keyword:_this.currentAddress,city:_this.initAddress},{keyword:value,city:_this.initAddress}],(status,result) => {
      //       console.log(result)
      //     });
      // })
    },
    //动态获取匹配到的地址
    addressChange () {
      this.status = true;
      this.keywordSearch(this.address);
    },
      //地图初始化
    initMap () {
      let _this = this;
      _this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 13
      });
      _this.map.plugin('AMap.Geolocation', () => {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);
        AMap.event.addListener(geolocation, 'error', onError);
        function onComplete (data) {
          console.log(data);
          _this.currentAddress = data.formattedAddress;
          _this.lat = data.position.lat;
          _this.lng = data.position.lng;
          _this.initAddress = data.addressComponent.city;
          // 创建一个 Marker 实例：
          var marker = new AMap.Marker({
            position: new AMap.LngLat(_this.lng, _this.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: _this.initAddress
          });

        // 将创建的点标记添加到已有的地图实例：
          _this.map.add(marker);
          console.log(_this.initAddress);
          console.log(_this.lat);
          console.log(_this);
        // data是具体的定位信息
        };
        function onError (data) {
          // 定位出错
        }
      });
    },
      // 关键词查询
    keywordSearch (address) {
      console.log(this.initAddress);
      console.log(this.lng);
      AMap.plugin(["AMap.StationSearch"], () => {
        //实例化公交站点查询类
        var station = new AMap.StationSearch({
          pageIndex: 1, //页码，默认值为1
          pageSize: 10, //单页显示结果条数，默认值为20，最大值为50
          city: this.initAddress //限定查询城市，可以是城市名（中文/中文全拼）、城市编码，默认值为『全国』
        });
        //执行关键字查询
        station.search(address, (status, result) => {
            //打印状态信息status和结果信息result
            //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误。
            // console.log(status, result);
          if(status === 'complete') {
            console.log(result);
            this.stationList = result.stationInfo;
          }
            // console.log(this.stationList)
        });
      });
    }
  }
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
    ul
      z-index 999
      position relative
      background white
      li
        height 30px
        cursor pointer
        line-height 30px
        text-indent 1em
        list-style-type none
        &:hover
          background #cccccc
#container
  width 100%
  height 100%

</style>
