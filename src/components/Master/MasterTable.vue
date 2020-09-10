<template>
  <a-layout-content class="content">
    <a-table :columns="columns" :data-source="data" :style="{background: 'white', padding: '20px'}">
      <a slot="mastername" slot-scope="text" @click="gotoinfo">{{ text }}</a>
      <span slot="customTitle">师傅名</span>
				<span slot="action">
        <a style="color: #FA4646;">删除师傅</a>
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
    axios.get(`${domain}/masterlistdata`).then((res) => {
      this.data = res.data;
    });

    axios.get(`${domain}/masterlistcolumns`).then((res) => {
      this.columns = res.data;
    });
  },
  methods: {
		gotoinfo() {
			this.$router.replace({
        path: "/masterinfo",
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
