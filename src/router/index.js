import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import ForgetPW from "../pages/ForgetPW.vue";
import Index from "../pages/Index.vue";

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
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes,
});

export default router;