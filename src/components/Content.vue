<template>
  <a-layout-content class="content">
    <!-- <Table /> -->
    <div id="canvas"></div>
  </a-layout-content>
</template>

<script>
// import Table from './components/Table';
import { StackedArea } from "@antv/g2plot";
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
    };
  },

  compoents: {
    // Table
  },

  mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";

    axios.get(`${domain}/tranval`).then((res) => {
      this.tableData = res.data;

      const areaPlot = new StackedArea(document.getElementById("canvas"), {
        title: {
          visible: true,
          text: "今日交易额",
        },
        legend: {
          position: "bottom-left",
        },
        data: this.tableData,
        meta: {
          month: {
            alias: "年份",
            range: [0, 1],
          },
          value: {
            alias: "数量",
            formatter: (v) => {
              return `${v}`;
            },
          },
        },
        xField: "month",
        yField: "value",
        stackField: "country",
      });
      areaPlot.render();
    });
  },
};
</script>

<style scoped>
#canvas {
  height: 100%;
}

.content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  overflow: auto;
}
</style>
