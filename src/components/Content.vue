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
        { country: 'Asia', year: '1750', value: 502,},
        { country: 'Asia', year: '1800', value: 635,},
        { country: 'Europe', year: '1750', value: 163,},
        { country: 'Europe', year: '1800', value: 203,},
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
          year: {
            alias:'年份',
            range: [0, 1],
          },
          value: {
            alias: '数量',
            formatter:(v)=>{return `${v}个`}
          }
        },
        xField: 'year',
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
