<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content style="width: 100%">
        <div class="contentTitle">总览</div>
        <div style="width: 100%">
          <a-range-picker class="datePicker" @change="onChange" :locale="locale" />
        </div>
        <KingkongArea />
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from "axios";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import Header from "../components/Header";
import Sider from "../components/Sider";
// import Footer from "../components/Footer";
import KingkongArea from "../components/KingkongArea";
import Content from "../components/Content";

export default {
  data() {
    return {
      locale,
    };
  },
  components: {
    Header,
    Sider,
    Content,
    // Footer,
    KingkongArea,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
  mounted() {
    let domain = "http://helperfaction.com/bgmanagement/api";
    axios.get(`${domain}/news`).then((res) => {
      return res;
    });
  },
};
</script>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 0 16px 0;
}

.contentTitle {
  font-size: 20px;
  margin-top: 1rem;
  margin-left: 1rem;
}

.datePicker {
  width: 240px;
  float: right;
  top: -20px;
  right: 1rem;
}
</style>
