function checkLogin (router, message) {
	router.push({
		path: "/index",
	});
	message.info("你已登录，正在为你跳转")
}

export { checkLogin }