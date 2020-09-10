<template>
  <a-layout-content class="content">
    <a-table :columns="columns" :data-source="data" :style="{background: 'white', padding: '20px'}">
      <a slot="username" slot-scope="text" @click="gotoinfo">{{ text }}</a>
      <span slot="customTitle">用户名</span>
				<span slot="action">
        <a style="color: #FA4646;">删除用户</a>
      </span>
    </a-table>
  </a-layout-content>
</template>

<script>
import axios from "axios";

export default {
  name: "OrderTable",
  data() {
    return {
      data: [],
      columns: [],
    };
  },
  mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";
    axios.get(`${domain}/userlistdata`).then((res) => {
      this.data = res.data;
    });

    axios.get(`${domain}/userlistcolumns`).then((res) => {
      this.columns = res.data;
    });
  },
  methods: {
		gotoinfo() {
			this.$router.replace({
        path: "/userinfo",
			});
		}
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  margin-top: 30px;
  padding: 20px;
  overflow: auto;
}
</style>
