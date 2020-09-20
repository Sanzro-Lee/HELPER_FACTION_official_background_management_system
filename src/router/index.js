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

const routes = [{
		path: "/",
		name: "login Page",
		component: Login,
	},
	{
		path: "/login",
		name: "login Page",
		component: Login,
	},
	{
		path: "/signup",
		name: "sign up page",
		component: SignUp,
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
	},
	{
		path: "/orderlist",
		name: "order list page",
		component: OrderList
	},
	{
		path: "/userlist",
		name: "user list page",
		component: UserList
	},
	{
		path: "/masterlist",
		name: "master list page",
		component: MasterList
	},
	{
		path: "/stafflist",
		name: "staff list page",
		component: StaffList
	},
	// {
	// 	path: "/adlist",
	// 	name: "ad list page",
	// 	component: AdList
	// },
	{
		path: "/orderinfo",
		name: "order info page",
		component: OrderInfo
	},
	{
		path: "/userinfo",
		name: "user info page",
		component: UserInfo
	},
	{
		path: "/masterinfo",
		name: "master info page",
		component: MasterInfo
	},
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes,
});

export default router;