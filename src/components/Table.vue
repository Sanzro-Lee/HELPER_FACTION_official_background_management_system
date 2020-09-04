<template>
  <a-layout-content class="content">
    <a-table :columns="columns" :data-source="data" :style="{background: 'white', padding: '20px'}">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle">
        <a-icon type="smile-o" />Name
      </span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
          tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
        "
        >{{ tag.toUpperCase() }}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link">
          More actions
          <a-icon type="down" />
        </a>
      </span>
    </a-table>
  </a-layout-content>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      data: [],
      columns: [],
    };
	},
	mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";
    axios.get(`${domain}/data`).then((res) => {
      this.data = res.data
		});
		
		axios.get(`${domain}/columns`).then((res) => {
      this.columns = res.data
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
