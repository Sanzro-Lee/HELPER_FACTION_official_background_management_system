<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content :style="{overflow: 'initial'}">
        <div class="contentTitle">订单详情</div>
				<a-icon class="closeinfo" type="close-circle" @click="goback" />
        <Info class="contentInfo" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import axios from "axios";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Info from "../components/Info";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Sider,
    Info,
  },
  methods: {
		goback() {
			this.$router.replace({
				path: "/orderlist",
			});
		}
  },
  mounted() {
    // let domain = "http://helperfaction.com/bgmanagement/api";
    // axios.get(`${domain}/news`).then((res) => {
    //   return res;
    // });
  },
};
</script>

<style scoped>
.contentTitle {
  font-size: 20px;
  margin-top: 1rem;
  margin-left: 1rem;
}

.contentInfo {
  width: 96%;
  background: white;
  margin-left: 1.8vw;
  border-radius: 10px;
  bottom: 0;
}

.closeinfo {
	font-size: 30px;
	float: right;
	margin-right: 20px;
	margin-top: -20px;
}
</style>