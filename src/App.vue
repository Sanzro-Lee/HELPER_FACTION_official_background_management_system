<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getlocalStorage } from "./utils/SetLocalStorage.js";

export default {
  mounted: {
    checklocalStore() {
      let status = getlocalStorage("username");
      if (status == -1) {
        this.$message.error("你的登录已失效，请重新登录");
        this.$router.push({
          path: "/login",
        });
      }
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
</style>
