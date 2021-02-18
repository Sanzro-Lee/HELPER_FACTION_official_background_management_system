function checkLogin (router, message) {
	router.push({
		path: "/index",
	});
	message.success("你已登录，已为你跳转")
}

function checkLogout (router, message) {
	router.push({
		path: "/login",
	});
	message.error("你未登录，请先登录")
}

export { checkLogin, checkLogout }
