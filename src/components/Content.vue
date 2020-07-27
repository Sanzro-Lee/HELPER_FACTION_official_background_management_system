<template>
  <a-layout-content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', overflow: 'auto' }"
  >
    <!-- <Table /> -->
    <div id="canvas"></div>
  </a-layout-content>
</template>

<script>
// import Table from './components/Table';
import { StackArea } from '@antv/g2plot';

export default {
  data() {
    return {
      mockData: [
        {country: '平均交易金额', month: '2月', value: 502,},
        {country: '平均交易金额', month: '3月', value: 635,},
        {country: '平均交易金额', month: '4月', value: 635,},
        {country: '当月总交易金额', month: '2月', value: 163,},
        {country: '当月总交易金额', month: '3月', value: 203,},
        {country: '当月总交易金额', month: '4月', value: 203,},
      ]
    }
  },

  mounted() {
    const areaPlot = new StackArea(document.getElementById('canvas'),
      {
        title: {
          visible: true,
          text: '今日交易额'
        },
        legend: {
          position: 'bottom-left'
        },
        data: this.mockData,
        meta: {
          month: {
            alias:'年份',
            range: [0, 1],
          },
          value: {
            alias: '数量',
            formatter:(v)=>{return `${v}`}
          }
        },
        xField: 'month',
        yField: 'value',
        stackField: 'country',
      }
    );
    areaPlot.render();
  },

  compoents: {
    // Table
  }
}
</script>

<style>
  #canvas {
    height: 100%;
  }
</style>
