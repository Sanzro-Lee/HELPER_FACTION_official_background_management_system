function setlocalStorage(key, value) {
	let currentTime = new Date().getTime()
	// 设置过期时间 (7天)
	// let pastTime = 7 * 24 * 60 * 60 * 1000
	// 设置过期时间（半小时）
	let pastTime = 30 * 60 * 1000
	window.localStorage.setItem(key, JSON.stringify({
		data: value,
		time: currentTime + pastTime
	}))
}

function getlocalStorage(key) {
	let dataObj = JSON.parse(window.localStorage.getItem(key))
	if (new Date().getTime() > dataObj.time) {
		removelocalStorage("username")
		return -1;
	} else {
		return dataObj.data
	}
}

function removelocalStorage(key) {
	window.localStorage.removeItem(key)
}

export {
	setlocalStorage,
	getlocalStorage,
	removelocalStorage
}