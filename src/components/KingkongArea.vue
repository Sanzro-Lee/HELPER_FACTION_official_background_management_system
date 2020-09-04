<template>
  <a-row class="areagroup" :gutter="[24,8]">
    <a-col class="borderout" :span="8">
      <span class="areatitle">今日登录用户量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
			<img class="chartsvg" src="../assets/todayUserBarChart.svg" />
    </a-col>
    <a-col class="borderout" :span="8">
      <span class="areatitle">今日登录师傅量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
			<img class="chartsvg" src="../assets/todaMasterBarChart.svg" />
    </a-col>
    <a-col class="borderout" :span="8">
      <span class="areatitle">今日订单量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
			<img class="chartsvg" src="../assets/todayOrderBarChart.svg" />
    </a-col>
		<!-- <a-col class="borderout" :span="8">
      <span class="areatitle">今日订单量</span>
      <span class="usernum">1453</span>
      <span class="arrowtext">
        <a-icon type="arrow-up" />13.8%
      </span>
			<img class="chartsvg" src="../assets/monthlyTradingChart.svg" />
    </a-col> -->
  </a-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  compoents: {},
};
</script>

<style scoped>
.areagroup {
	display: inline-flex;
	align-content: center;
	margin: 20px 56px 0 18px !important;
}

.borderout {
	height: 10rem;
	margin-right: 20px;
  background: white;
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
	color: #FF4141;
}

.chartsvg {
	width: 8vw;
	position: absolute;
	right: 20px;
	bottom: 20px;
}
</style>
