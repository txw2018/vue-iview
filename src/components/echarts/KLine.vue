<!-- K线 -->
<template>
  <div id="myChart3" :style="{width: '400px', height: '300px'}"></div>
</template>

<script>
export default {
  data () {
    return {
      upColor: '#ec0000',
      upBorderColor: '#8A0000',
      downColor: '#00da3c',
      downBorderColor: '#008F28',
    };
  },
  props: {
    kLineData: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  created () {
    console.log(this.kLineData);
  },
  components: {},

  computed: {
    calculateMA () {
      console.log(this.kLineData);
      console.log(this.kLineData.values);
      return function (dayCount) {
        if(this.kLineData.values) {
          var result = [];
          for (var i = 0, len = this.kLineData.values.length; i < len; i++) {
            if (i < dayCount) {
              result.push('-');
              continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
              sum += this.kLineData.values[i - j][1];
            }
            result.push(sum / dayCount);
          }
          return result;
        };
      };
    },
  },

  mounted () {
    this.initEcharts();
  },

  methods: {

    initEcharts () {
      let myChart = this.$echarts.init(document.getElementById('myChart3'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: '上证指数',
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: this.kLineData.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: {onZero: false},
          splitLine: {show: false},
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 50,
            end: 100
          },
          {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
            end: 100
          }
        ],
        series: [
          {
            name: '日K',
            type: 'candlestick',
            data: this.kLineData.values,
            itemStyle: {
              normal: {
                color: this.upColor,
                color0: this.downColor,
                borderColor: this.upBorderColor,
                borderColor0: this.downBorderColor
              }
            },
            markPoint: {
              label: {
                normal: {
                  formatter: function (param) {
                    return param != null ? Math.round(param.value) : '';
                  }
                }
              },
              data: [
                {
                  name: 'XX标点',
                  coord: ['2013/5/31', 2300],
                  value: 2300,
                  itemStyle: {
                    normal: {color: 'rgb(41,60,85)'}
                  }
                },
                {
                  name: 'highest value',
                  type: 'max',
                  valueDim: 'highest'
                },
                {
                  name: 'lowest value',
                  type: 'min',
                  valueDim: 'lowest'
                },
                {
                  name: 'average value on close',
                  type: 'average',
                  valueDim: 'close'
                }
              ],
              tooltip: {
                formatter: function (param) {
                  return param.name + '<br>' + (param.data.coord || '');
                }
              }
            },
            markLine: {
              symbol: ['none', 'none'],
              data: [
                [
                  {
                    name: 'from lowest to highest',
                    type: 'min',
                    valueDim: 'lowest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                      normal: {show: false},
                      emphasis: {show: false}
                    }
                  },
                  {
                    type: 'max',
                    valueDim: 'highest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                      normal: {show: false},
                      emphasis: {show: false}
                    }
                  }
                ],
                {
                  name: 'min line on close',
                  type: 'min',
                  valueDim: 'close'
                },
                {
                  name: 'max line on close',
                  type: 'max',
                  valueDim: 'close'
                }
              ]
            }
          },
          {
            name: 'MA5',
            type: 'line',
            data: this.calculateMA(5),
            smooth: true,
            lineStyle: {
              normal: {opacity: 0.5}
            }
          },
          {
            name: 'MA10',
            type: 'line',
            data: this.calculateMA(10),
            smooth: true,
            lineStyle: {
              normal: {opacity: 0.5}
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: this.calculateMA(20),
            smooth: true,
            lineStyle: {
              normal: {opacity: 0.5}
            }
          },
          {
            name: 'MA30',
            type: 'line',
            data: this.calculateMA(30),
            smooth: true,
            lineStyle: {
              normal: {opacity: 0.5}
            }
          },

        ]
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
</style>
