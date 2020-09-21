import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
// import ForgetPW from "../pages/ForgetPW.vue";
import Index from "../pages/Index.vue";
import OrderList from "../pages/Order/OrderList.vue";
import UserList from "../pages/User/UserList.vue";
import MasterList from "../pages/Master/MasterList.vue";
import StaffList from "../pages/StaffList.vue";
// import AdList from "../pages/AdList.vue";
import OrderInfo from "../pages/Order/OrderInfo.vue";
import UserInfo from "../pages/User/UserInfo.vue";
import MasterInfo from "../pages/Master/MasterInfo.vue";

const routes = [
  {
    path: "/",
    name: "login Page",
		redirect: "/login",
		meta: {}
  },
  {
    path: "/login",
    name: "login Page",
    component: Login,
    meta: {
      title: "叫到帮-登录",
    },
  },
  {
    path: "/signup",
    name: "sign up page",
    component: SignUp,
    meta: {
      title: "叫到帮-注册",
    },
  },
  // {
  // 	path: "/forgetpw",
  // 	name: "forget password page",
  // 	component: ForgetPW,
  // },
  {
    path: "/index",
    name: "index page",
    component: Index,
    meta: {
      title: "叫到帮-首页",
    },
  },
  {
    path: "/orderlist",
    name: "order list page",
    component: OrderList,
    meta: {
      title: "叫到帮-订单列表",
    },
  },
  {
    path: "/userlist",
    name: "user list page",
    component: UserList,
    meta: {
      title: "叫到帮-用户列表",
    },
  },
  {
    path: "/masterlist",
    name: "master list page",
    component: MasterList,
    meta: {
      title: "叫到帮-师傅列表",
    },
  },
  {
    path: "/stafflist",
    name: "staff list page",
    component: StaffList,
    meta: {
      title: "叫到帮-员工列表",
    },
  },
  // {
  // 	path: "/adlist",
  // 	name: "ad list page",
  // 	component: AdList
  // },
  {
    path: "/orderinfo",
    name: "order info page",
    component: OrderInfo,
    meta: {
      title: "叫到帮-订单详情",
    },
  },
  {
    path: "/userinfo",
    name: "user info page",
    component: UserInfo,
    meta: {
      title: "叫到帮-用户详情",
    },
  },
  {
    path: "/masterinfo",
    name: "master info page",
    component: MasterInfo,
    meta: {
      title: "叫到帮-师傅详情",
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
