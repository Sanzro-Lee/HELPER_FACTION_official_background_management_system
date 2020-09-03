<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div>
      <img
        class="logo"
        src="../assets/header_logo.svg"
        style="margin: 20px 0 20px 20px; background: none; width: 80px;"
      />
    </div>
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      style="background: #2866B1"
    >
      <a-menu-item key="1">
        <a-icon type="home" />
        <span>总览</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="container" theme="filled" />
        <span>订单列表</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="user" />
        <span>用户列表</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="user" />
        <span>师傅列表</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="user-add" />
        <span>员工列表</span>
      </a-menu-item>
      <a-menu-item key="6">
        <a-icon type="barcode" />
        <span>上传广告图</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {},
  props: {
    // collapsed: {type:Boolean},
    // collapsedvalue: {type: Boolean}
  },
};
</script>

<style scoped>
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
