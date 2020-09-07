<template>
  <div class="content">
    <div id="canvas"></div>
  </div>
</template>

<script>
import { StackedArea } from "@antv/g2plot";
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
    };
  },

  compoents: {},

  mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";

    axios.get(`${domain}/tranval`).then((res) => {
      this.tableData = res.data;

      const areaPlot = new StackedArea(document.getElementById("canvas"), {
        title: {
          visible: true,
          text: "月度交易额",
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
  height: 75%;
  overflow: auto;
}
</style>
