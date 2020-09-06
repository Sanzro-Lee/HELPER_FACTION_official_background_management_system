<template>
  <a-layout-sider>
    <div>
      <img class="leftsidelogo" src="../assets/header_logo.svg" />
    </div>
    <a-menu class="antmenu" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1" @click="gotolink($event)">
        <a-icon type="home" />
        <span>总览</span>
      </a-menu-item>
      <a-menu-item key="2" @click="gotolink($event)">
        <a-icon type="container" theme="filled" />
        <span>订单列表</span>
      </a-menu-item>
      <a-menu-item key="3" @click="gotolink($event)">
        <a-icon type="user" />
        <span>用户列表</span>
      </a-menu-item>
      <a-menu-item key="4" @click="gotolink($event)">
        <a-icon type="user" />
        <span>师傅列表</span>
      </a-menu-item>
      <a-menu-item key="5" @click="gotolink($event)">
        <a-icon type="user-add" />
        <span>员工列表</span>
      </a-menu-item>
      <a-menu-item key="6" @click="gotolink($event)">
        <a-icon type="barcode" />
        <span>上传广告图</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
	props: {},
	methods: {
		gotolink(e) {
			if(e.key == 1) {
				this.$router.replace({
					path: "/index",
					// query: {
					// 	xxx: 'xxx'
					// }
				});
			}
			if(e.key == 2) {
				this.$router.replace({
					path: "/orderlist",
				});
			}
			if(e.key == 3) {
				this.$router.replace({
					path: "/userlist",
				});
			}
			if(e.key == 4) {
				this.$router.replace({
					path: "/masterlist",
				});
			}
			if(e.key == 5) {
				this.$router.replace({
					path: "/stafflist",
				});
			}
			if(e.key == 6) {
				this.$router.replace({
					path: "/adlist",
				});
			}
		}
	}
};
</script>

<style scoped>
.leftsidelogo {
  margin: 20px 0 20px 30%;
  background: none;
  width: 80px;
}

.antmenu {
  background: #2866b1;
}

.ant-layout-sider {
  background: #2866b1;
  color: #fff;
}

.ant-menu-item {
  color: #fff;
}

.ant-menu-item-selected {
  background: #245c9f;
  color: #fff;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #245c9f !important;
}

.ant-menu-inline .ant-menu-item::after {
  border-right-color: #f1e928 !important;
}
</style>
