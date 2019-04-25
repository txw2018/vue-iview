<!-- 用户统计 -->
<template>
  <div class="echarts">
    <div>
      <lineChart></lineChart>
    </div>
    <div>
      <KLine
        :kLineData="kLineData"
        v-if="flag">
      </KLine>
    </div>
  </div>
</template>

<script>
import lineChart from '../../components/echarts/LineChart';
import KLine from '../../components/echarts/KLine';
import {postKline} from '../../service/getData.js';
export default {
  data () {
    return {
      kLineData: {},
      kLineData1: {a: 2},
      flag: false
    };
  },

  components: {
    lineChart,
    KLine
  },

  computed: {},
  created () {
    this.getKline();
  },

  mounted () {},

  methods: {
    getKline () {
      postKline()
        .then(res => {
          let data = res.data.kLineData;
          let categoryData = [];
          let values = [];
          data.forEach(item => {
            categoryData.push(item.splice(0, 1)[0]);
            values.push(item);
          });
          this.flag = true;
          this.kLineData = {
            categoryData,
            values
          };
        });
    }
  }
};
</script>
<style lang='stylus' scoped>
.echarts
  margin 100px 50px
  display flex
  justify-content flex-start
</style>
