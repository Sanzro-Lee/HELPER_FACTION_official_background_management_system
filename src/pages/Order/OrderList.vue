<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header :msg="parentsmsg" />
			<a-layout-content>
      <div class="contentTitle">订单列表</div>
			<div style="width: 100%; height: 0;">
				<a-range-picker class="datePicker" @change="onChange" :locale="locale" />
			</div>
			<div>
				<OrderTable class="tablecomponent" />
			</div>
			</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from "axios";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import Header from "../../components/Header";
import Sider from "../../components/Sider";
import OrderTable from "../../components/Order/OrderTable";
import { checkLogout } from "../../utils/ChekLogin.js";

export default {
  data() {
    return {
			locale,
			parentsmsg: "请输入订单号"
    };
  },
  components: {
    Header,
		Sider,
		OrderTable,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
		},
  },
  mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";
    axios.get(`${domain}/news`).then((res) => {
      return res;
		});
    // 检测登录状态
		let loginText = window.localStorage.getItem("username");
    if (!loginText) {
			checkLogout(this.$router, this.$message);
		}
	},
};
</script>

<style scoped>
.contentTitle {
  font-size: 20px;
  margin-top: 1rem;
  margin-left: 1rem;
}

.datePicker {
  width: 240px;
  float: right;
  top: -20px;
  right: 1rem;
}

.tablecomponent {
  width: 96%;
  margin-left: 1.8vw;
}
</style>
