<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header />
			<a-layout-content>
      <div class="contentTitle">订单列表</div>
			<div style="width: 100%; height: 0;">
				<a-range-picker class="datePicker" @change="onChange" :locale="locale" />
			</div>
			<div @click="gotoInfo()">
				<Table class="tablecomponent" ref="Table" />
			</div>
			</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from "axios";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Table from "../components/Table";

export default {
  data() {
    return {
      locale,
    };
  },
  components: {
    Header,
		Sider,
		Table,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
		},
		gotoInfo() {
			this.$refs.Table.handleParentClick("someid");
		}
  },
  mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";
    axios.get(`${domain}/news`).then((res) => {
      return res;
		});
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
