<template>
  <a-row
    class="areagroup"
    :gutter="[16,16]"
    style="width: 100%; padding-left: 10px; padding-right: 50px;"
    justify="space-around"
    align="middle"
  >
    <a-col class="borderout" :span="8" @click="clickBlock(1)" :style="{display: userShow}">
      <span class="areatitle">本周登录用户量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
      <img class="chartsvg" src="../assets/todayUserBarChart.svg" />
    </a-col>
    <a-col class="borderout" :span="8" @click="clickBlock(2)" :style="{display: masterShow}">
      <span class="areatitle">本周登录师傅量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
      <img class="chartsvg" src="../assets/todaMasterBarChart.svg" />
    </a-col>
    <a-col class="borderout" :span="8" @click="clickBlock(3)" :style="{display: orderShow}">
      <span class="areatitle">本周订单量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
      <img class="chartsvg" src="../assets/todayOrderBarChart.svg" />
    </a-col>
    <a-col class="borderout" :span="8" @click="clickBlock(4)" :style="{display: todayOrderShow}">
      <span class="areatitle">今日订单量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
      <img class="chartsvg" src="../assets/monthlyTradingChart.svg" />
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      userShow: "",
      masterShow: "",
      orderShow: "",
			todayOrderShow: "none",
    };
	},
	methods: {
		// 根据电击不同的区域，传递不同的值到 Content 组件。
		clickBlock(e) {
			if(e == 1) {
				this.userShow = "none";
				this.masterShow = "";
				this.orderShow = "";
				this.todayOrderShow = "";
				this.$emit('clickBlock', 1)
			}
			if(e == 2) {
				this.userShow = "";
				this.masterShow = "none";
				this.orderShow = "";
				this.todayOrderShow = "";
				this.$emit('clickBlock', 2)
			}
			if(e == 3) {
				this.userShow = "";
				this.masterShow = "";
				this.orderShow = "none";
				this.todayOrderShow = "";
				this.$emit('clickBlock', 3)
			}
			if(e == 4) {
				this.userShow = "";
				this.masterShow = "";
				this.orderShow = "";
				this.todayOrderShow = "none";
				this.$emit('clickBlock', 4)
			}
		}
	},
	mounted: function() {
		// 初始化
		this.userShow = "";
		this.masterShow = "";
		this.orderShow = "";
		this.todayOrderShow = "none";
	}
};
</script>

<style scoped>
.areagroup {
  display: inline-flex;
}

.borderout {
  height: 10rem;
  background: white;
  margin-left: 14px;
}

.areatitle {
  font-size: 20px;
  color: #706f85;
  position: absolute;
  top: 20px;
  left: 20px;
}

.usernum {
  font-size: 30px;
  position: absolute;
  bottom: 50px;
  left: 20px;
}

.arrowtext {
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  left: 22px;
  color: #ff4141;
}

.chartsvg {
  width: 8vw;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
