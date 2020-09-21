import axios from "axios";

let domain = "http://127.0.0.1:8000/";

function loginFun(apiname, param, pagerouter, replacepath, pagemessage) {
  axios.post(domain + apiname, param,)
    .then((res) => {
			if (res.data.length != 0) {
        pagerouter.push({
					path: replacepath
				});
				pagemessage.success("登录成功")
      } else {
				pagemessage.error("登录失败，请重新输入账户和密码")
			}
    });
}

function signupFun(apiname, params, pagerouter, replacepath, pagemessage) {
  axios.post(domain + apiname, params,)
    .then((res) => {
			if (res.data == -1) {
				pagemessage.error("注册失败，该手机号码已存在")
			} else if (res.msg != 0) {
        pagerouter.push({
          path: replacepath
				});
				pagemessage.success("注册成功")
			} else {
				pagemessage.error("注册失败，请重新输入信息")
			}
    });
}

export { loginFun, signupFun };
