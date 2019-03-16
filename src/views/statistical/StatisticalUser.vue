<!-- 用户统计 -->
<template>
  <div>
    <div>
      <lineChart></lineChart>
    </div>
    <div>
      <KLine :kLineData = "kLineData"></KLine>
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
          // this.kLineData = {
          //   categoryData,
          //   values
          // };
          this.$set(this.kLineData, 'categoryData', categoryData);
          this.$set(this.kLineData, 'values', values);
          // console.log(this.kLineData);
        });
    }
  }
};
</script>
<style lang='stylus' scoped>
</style>
