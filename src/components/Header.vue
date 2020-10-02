<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-input-search
      :placeholder="msg"
      :style="{ width: '300px', marginLeft: '20px', display: show }"
      @search="onSearch"
    />
    <a-dropdown
      :style="{ color: 'black', float: 'right', marginRight: '20px' }"
    >
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        {{ username }}
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay" :style="{ top: '-20px' }">
        <a-menu-item>
          <a href="javascript:;" @click="logOut">退出账号</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>

<script>
import {
  getlocalStorage,
  removelocalStorage,
} from "../utils/SetLocalStorage.js";

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
      removelocalStorage("username");
      this.$router.push({
        path: "/login",
      });
    },
  },
  mounted() {
		let arr = getlocalStorage("username");
    this.username = arr;
  },
};
</script>

<style scoped></style>
