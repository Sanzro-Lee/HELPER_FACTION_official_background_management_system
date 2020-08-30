<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
    <Sider collapsed="collapsed" />
    <a-layout>
      <Header collapsed="collapsed" />
      <div :style="{ fontSize: '20px', marginTop: '1rem', marginLeft: '1rem' }">总览</div>
      <a-range-picker @change="onChange" :style="{ width: '240px', position: 'absolute', top: '5rem', right: '1rem' }" />
      <Content />
      <a-layout-footer style="textAlign: center">
        Powered by Sanzro Design 叫到帮™ HELPER FACTION Copyright © Since 2018
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue';
import Sider from './components/Sider.vue';
import Content from './components/Content.vue';

export default {
  data() {
    return {
      collapsed: false,
      // collapsedvalue: true
    }
  },
  components: {
    Header,
    Sider,
    Content
  },

  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  },

  mounted() {
    axios.get('/news').then(res => {
      console.log(res.data)
    })
  }
};
</script>

<style>
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
</style>
