<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
    <Sider />
    <a-layout>
      <Header :msg="parentmsg" />
      <a-layout-content>
        <div class="contentTitle">员工列表</div>
        <div>
          <StaffTable class="tablecomponent" />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "../components/Header";
import Sider from "../components/Sider";
import StaffTable from "../components/StaffTable";
import { checkLogout } from "../utils/ChekLogin.js";

export default {
  data() {
    return {
      parentmsg: "请输入员工名或手机号码",
    };
  },
  mounted() {
    // 检测登录状态
    let loginText = window.localStorage.getItem("username");
    if (!loginText) {
      checkLogout(this.$router, this.$message);
    }
  },
  components: {
    Header,
    Sider,
    StaffTable,
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
