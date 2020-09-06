<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header />
      <div class="contentTitle">上传广告图</div>
			<div class="datepickerdiv">
				<a-range-picker class="datePicker" @change="onChange" :locale="locale" />
			</div>
      <a-layout-footer style="textAlign: center; bottom: 0;">
        Powered by Sanzro Design 叫到帮™ HELPER FACTION Copyright © Since
        2018
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
// import axios from "axios";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import Header from "../components/Header";
import Sider from "../components/Sider";

export default {
  data() {
    return {
      locale,
    };
  },
  components: {
    Header,
    Sider,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
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

.datepickerdiv {
	width: 100%;
}

.datePicker {
  width: 240px;
  position: absolute;
  top: 5rem;
  right: 2vw;
}
</style>
