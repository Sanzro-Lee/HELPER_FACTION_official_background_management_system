import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import ForgetPW from "../pages/ForgetPW.vue";
import Index from "../pages/Index.vue";
import OrderList from "../pages/OrderList.vue";
import UserList from "../pages/UserList.vue";
import MasterList from "../pages/MasterList.vue";
import StaffList from "../pages/StaffList.vue";
// import AdList from "../pages/AdList.vue";
import OrderInfo from "../pages/OrderInfo.vue"

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
	{
		path: "/forgetpw",
		name: "forget password page",
		component: ForgetPW,
	},
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
	}
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes,
});

export default router;