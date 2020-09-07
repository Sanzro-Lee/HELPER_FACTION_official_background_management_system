<template>
  <a-layout-sider>
    <div>
      <img class="leftsidelogo" src="../assets/header_logo.svg" />
    </div>
    <a-menu class="antmenu" mode="inline" :selectedKeys="[this.$route.path]">
      <a-menu-item key="/index" @click="gotolink($event)">
        <a-icon type="home" />
        <span>总览</span>
      </a-menu-item>
      <a-menu-item key="/orderlist" @click="gotolink($event)">
        <a-icon type="container" theme="filled" />
        <span>订单列表</span>
      </a-menu-item>
      <a-menu-item key="/userlist" @click="gotolink($event)">
        <a-icon type="user" />
        <span>用户列表</span>
      </a-menu-item>
      <a-menu-item key="/masterlist" @click="gotolink($event)">
        <a-icon type="user" />
        <span>师傅列表</span>
      </a-menu-item>
      <a-menu-item key="/stafflist" @click="gotolink($event)">
        <a-icon type="user-add" />
        <span>员工列表</span>
      </a-menu-item>
      <!-- <a-menu-item key="/adlist" @click="gotolink($event)">
        <a-icon type="barcode" />
        <span>上传广告图</span>
      </a-menu-item> -->
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
      if (e.key == "/index") {
        if (this.$router.history.current.path != "/index") {
          this.$router.replace({
            path: "/index",
            // query: {
            // 	xxx: 'xxx'
            // }
          });
        }
      }
      if (e.key == "/orderlist") {
        if (this.$router.history.current.path != "/orderlist") {
          this.$router.replace({
            path: "/orderlist",
          });
        }
      }
      if (e.key == "/userlist") {
        if (this.$router.history.current.path != "/userlist") {
          this.$router.replace({
            path: "/userlist",
          });
        }
      }
      if (e.key == "/masterlist") {
        if (this.$router.history.current.path != "/masterlist") {
          this.$router.replace({
            path: "/masterlist",
          });
        }
      }
      if (e.key == "/stafflist") {
        if (this.$router.history.current.path != "/stafflist") {
          this.$router.replace({
            path: "/stafflist",
          });
        }
      }
      // if (e.key == "/adlist") {
      //   if (this.$router.history.current.path != "/adlist") {
      //     this.$router.replace({
      //       path: "/adlist",
      //     });
      //   }
      // }
    },
  },
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
