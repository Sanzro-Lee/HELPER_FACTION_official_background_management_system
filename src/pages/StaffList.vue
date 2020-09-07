<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header />
			<a-layout-content>
      <div class="contentTitle">员工列表</div>
      <div>
				<Table class="tablecomponent" />
			</div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import axios from "axios";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Table from "../components/Table";

export default {
  data() {
    return {};
  },
  components: {
    Header,
		Sider,
    Table,
  },
  methods: {},
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

.tablecomponent {
  width: 96%;
  margin-left: 1.8vw;
}
</style>
