// 加密存储在cookie的密码
import CryptoJS from "crypto-js";

//设置cookie
function setCookie(c_name, c_pw, exdays) {
	// 加密pwd，开发环境与生产环境 salt 应不一样（也就是要换掉***）
	let en_pwd = CryptoJS.AES.encrypt(c_pw, "***")
	//获取时间
	let exdate = new Date()
	//保存的天数
	exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)
	//字符串拼接cookie
	window.document.cookie =
		"userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
	window.document.cookie =
		"userPwd" + "=" + en_pwd + ";path=/;expires=" + exdate.toGMTString();
}

//清除cookie
function clearCookie() {
	//修改2值都为空，天数为负1天就好了
	setCookie("", "", -1)
}

export {
	setCookie,
	clearCookie
}