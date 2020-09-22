<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-input-search
      :placeholder="msg"
      :style="{width: '300px', marginLeft: '20px', display: show}"
      @search="onSearch"
    />
    <a-dropdown :style="{color: 'black', float: 'right', marginRight: '20px'}">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        {{ username }}
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay" :style="{top: '-20px', right: '10px'}">
        <a-menu-item>
          <a href="javascript:;" @click="logOut">退出账号</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      username: "",
    };
  },
  props: {
    msg: String,
    show: String,
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    logOut() {
			this.$router.push({
				path: "/login",
			});
    },
  },
  mounted() {
    // 将 cookie 的用户名发送给 header
    if (document.cookie.length > 0) {
      let arr = document.cookie.split("; ");
      for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split("="); //再次切割
        //判断查找相对应的值
        if (arr2[0] == "userName") {
          this.username = arr2[1]; //保存到保存数据的地方
        }
      }
    }
  },
};
</script>

<style scoped></style>
