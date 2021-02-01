<template>
  <v-card
    class="mt-4 mx-auto"
    max-width="600"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
      height="280"
    >
        <div class="main" style="width:100%; height:100%"></div>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        User Registrations
      </div>
      <div class="subheading font-weight-light grey--text">
        Last Campaign Performance
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template>

<script>

import ec from '@/eventcenter'

export default {
    name: 'Echarts',
    methods:{
        myEcharts() {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(this.$el.getElementsByClassName('main')[0]);

            // 指定图表的配置项和数据
            var option = {
                
                // title: {
                //     text: 'ECharts 入门示例'
                // },
                tooltip: {},
                // legend: {
                //     data:['销量'],
                // },
                xAxis: {
                    data: ["M", "T", "W", "T", "F", "S", "S"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20, 11]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(option);
        }
    },
    mounted() {
        this.myEcharts();
        ec.sub('window_resize', this, () => {
            this.myChart.resize();
        })
    }
}
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>