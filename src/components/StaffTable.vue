<template>
  <a-layout-content class="content">
    <a-table :columns="columns" :data-source="data" :style="{background: 'white', padding: '20px'}">
      <span slot="customTitle">员工名</span>
      <span slot="action">
        <a style="color: #2866B1; margin-right: 20px">编辑员工</a>
        <a style="color: #FA4646;">删除员工</a>
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
    axios.get(`${domain}/stafflistdata`).then((res) => {
      this.data = res.data;
    });

    axios.get(`${domain}/stafflistcolumns`).then((res) => {
      this.columns = res.data;
    });
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
