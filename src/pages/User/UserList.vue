<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header :msg="parentsmsg" />
			<a-layout-content>
      <div class="contentTitle">用户列表</div>
			<div>
				<UserTable class="tablecomponent" />
			</div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "../../components/Header";
import Sider from "../../components/Sider";
import UserTable from "../../components/User/UserTable";
import { checkLogout } from "../../utils/ChekLogin.js";

export default {
  data() {
    return {
			parentsmsg: "请输入用户名或手机号码",
		};
  },
  components: {
		Header,
    Sider,
    UserTable,
	},
	mounted() {
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

.tablecomponent {
  width: 96%;
  margin-left: 1.8vw;
}
</style>
