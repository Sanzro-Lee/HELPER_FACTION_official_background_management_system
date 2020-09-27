<template>
  <div class="content">
    <!-- 现状图 -->
    <div id="areachart" :style="{display: areashow}"></div>
    <!-- 柱状图 -->
    <div id="cloumnchart" :style="{display: clomnshow}"></div>
  </div>
</template>

<script>
import { StackedArea, Column } from "@antv/g2plot";
import axios from "axios";

let domain = "http://helperfaction.com/bgmanagement/api";

export default {
  data() {
    return {
      tableData: [],
      cloumnData: [],
      areashow: "",
      clomnshow: "",
    };
  },

  // 销售额线图
  StackedArea: function () {
    // 清除div内部内容，迭代时请修改此方法
    document.getElementById("areachart").innerHTML = "";
    // 获得现状图的数据
    this.tableData = "";
    axios.get(`${domain}/stackedareadata`).then((res) => {
      this.tableData = res.data;

      const areaPlot = new StackedArea("areachart", {
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
        smooth: true,
        color: ["#54D8FF", "#A7A7FF"],
      });
      areaPlot.render();
    });
  },

  // 渲染柱状图
  Column: function (text, kind) {
    // 清除div内部内容，迭代时请修改此方法
    document.getElementById("cloumnchart").innerHTML = "";
    let cloumnData = "";
    let color = "";
    // 根据不同的分类，写入不同的url
    if (kind == 1) {
      cloumnData = "columnuserdata";
      color = "#55D8FE";
    }
    if (kind == 2) {
      cloumnData = "columnmasterdata";
      color = "#A3A0FB";
    }
    if (kind == 3) {
      cloumnData = "columnorderdata";
      color = "#5EE2A0";
    }
    // 获得相应的数据
    axios.get(`${domain}/${cloumnData}`).then((res) => {
      this.cloumnData = res.data;

      const columnPlot = new Column("cloumnchart", {
        title: {
          visible: true,
          text: "本周" + text,
        },
        forceFit: true,
        data: this.cloumnData,
        padding: "auto",
        xField: "type",
        yField: "num",
        meta: {
          type: {
            alias: "本周",
          },
          num: {
            alias: text,
          },
        },
        color: color,
      });
      columnPlot.render();
    });
  },
  mounted: function () {
    // 初始化
    this.clomnshow = "none";
    this.$options.StackedArea();
  },
  methods: {
		// e 值来自 KingkongArea 组件，值通过 Index 组件 传递。
    contentClick(e) {
      if (e == 1) {
        this.clickUser()
			}
			if (e == 2) {
				this.clickMaster()
			}
			if (e == 3) {
				this.clickOrder()
			}
			if (e == 4) {
				this.clickTurnover()
			}
    },
    // 点击本周登录用户量块
    clickUser() {
      this.areashow = "none";
      this.clomnshow = "";
      this.$options.Column("用户数", 1);
    },
    // 点击本周登录师傅量块
    clickMaster() {
      this.areashow = "none";
      this.clomnshow = "";
      this.$options.Column("师傅数", 2);
    },
    // 点击本周订单量块
    clickOrder() {
      this.areashow = "none";
      this.clomnshow = "";
      this.$options.Column("订单量", 3);
    },
    // 点击营业额块
    clickTurnover() {
      this.clomnshow = "none";
      this.areashow = "";
      this.$options.StackedArea();
    },
  },
};
</script>

<style scoped>
#areachart {
  height: 100%;
}

#cloumnchart {
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
