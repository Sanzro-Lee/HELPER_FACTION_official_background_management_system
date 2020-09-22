import axios from "axios";

let domain = "http://127.0.0.1:8000/";

// 登录方法
function loginFun(apiname, params, pagerouter, replacepath, pagemessage) {
  axios.post(domain + apiname, params).then((res) => {
    if (res.data.length != 0) {
			// 保存登录状态
			window.localStorage.setItem("login", "login")
      pagerouter.push({
        path: replacepath,
      });
			pagemessage.success("登录成功");
    } else {
      pagemessage.error("登录失败，请重新输入账户和密码");
    }
  })
}

// 注册方法
function signupFun(apiname, params, pagerouter, replacepath, pagemessage) {
  axios.post(domain + apiname, params).then((res) => {
    if (res.data == -1) {
      pagemessage.error("注册失败，该手机号码已存在");
    } else if (res.msg != 0) {
      pagerouter.push({
        path: replacepath,
      });
      pagemessage.success("注册成功");
    } else {
      pagemessage.error("注册失败，请重新输入信息");
    }
  })
}

export { loginFun, signupFun };
