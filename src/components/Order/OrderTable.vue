<template>
  <a-layout-content class="content">
    <a-table :columns="columns" :data-source="data" :style="{background: 'white', padding: '20px'}">
      <a slot="ordernum" slot-scope="text" @click="gotoinfo">{{ text }}</a>
      <span slot="customTitle">订单号</span>
      <!-- <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
          tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
        "
        >{{ tag.toUpperCase() }}</a-tag>
      </span>-->
      <!-- <span slot="action" slot-scope="text, record"> -->
      <span slot="action">
        <!-- <a>Invite 一 {{ record.ordernum }}</a> -->
        <!-- <a-divider type="vertical" /> -->
        <a style="color: #FA4646;">删除订单</a>
        <!-- <a-divider type="vertical" /> -->
        <!-- <a class="ant-dropdown-link">
          More actions
          <a-icon type="down" />
        </a>-->
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
    axios.get(`${domain}/orderlistdata`).then((res) => {
      this.data = res.data;
    });

    axios.get(`${domain}/orderlistcolumns`).then((res) => {
      this.columns = res.data;
    });
  },
  methods: {
    gotoinfo() {
			let name = this.$route.query.username
      this.$router.push({
        path: "/orderinfo",
        query: {
          username: name,
        },
      });
    },
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
