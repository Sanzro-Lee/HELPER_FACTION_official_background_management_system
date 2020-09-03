import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router/index";

import Antd from "ant-design-vue";
import "./mock.js";

import "ant-design-vue/dist/antd.css";
import App from "./App";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueRouter);

const g2plot = require("@antv/g2plot");
Vue.prototype.$g2plot = g2plot;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
