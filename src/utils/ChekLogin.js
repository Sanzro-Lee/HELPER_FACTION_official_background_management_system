function checkLogin (router, message) {
	router.push({
		path: "/index",
	});
	message.info("你已登录，正在为你跳转")
}

function checkLogout (router, message) {
	router.push({
		path: "/login",
	});
	message.info("你未登录，请先登录")
}

export { checkLogin, checkLogout }
