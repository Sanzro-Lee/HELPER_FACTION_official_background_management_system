<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header />
			<a-layout-content>
      <div class="contentTitle">上传广告图</div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import axios from "axios";
import Header from "../components/Header";
import Sider from "../components/Sider";

export default {
  data() {
    return {};
  },
  components: {
		Header,
    Sider,
  },
  methods: {},
  mounted() {
    // let domain = "http://helperfaction.com/bgmanagement/api";
    // axios.get(`${domain}/news`).then((res) => {
    //   return res;
    // });
  },
};
</script>

<style scoped>
.contentTitle {
  font-size: 20px;
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>
