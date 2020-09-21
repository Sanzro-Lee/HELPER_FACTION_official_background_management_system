<template>
  <div class="main">
    <div class="loginpagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你登录你的账号</span>
      <a-form layout="inline" :form="form" @submit="handleSubmit" :style="{marginLeft: '2vw'}">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
							{ initialValue: username },
              { rules: [{ required: true, message: '啊咧？用户名咧？' }] },
            ]"
            placeholder="请输入用户名"
            class="antdinput"
            size="large"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input-password
            v-decorator="[
              'password',
							{ initialValue: password },
              { rules: [{ required: true, message: '啊咧？密码咧？' }] },
            ]"
            type="password"
            placeholder="请输入密码"
            class="antdinput"
            size="large"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item :style="{ display: 'block' }">
          <div class="rememberpw">
            <a-switch default-checked @change="onChange" />
            <span :style="{ marginLeft: '20px' }">记住密码</span>
          </div>
          <!-- <router-link class="forgetpw" to="/forgetpw">忘记密码</router-link> -->
        </a-form-item>
        <a-form-item class="antbtngrounp">
          <a-button
            class="loginbtn"
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
            shape="round"
          >登录</a-button>
          <a-button class="signupbtn" type="dange" shape="round">
            <router-link to="/signup">注册</router-link>
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <span class="footertext">Powered by Sanzro Design 叫到帮™ HELPER FACTION Copyright © Since 2018</span>
  </div>
</template>

<script>
import { loginFun } from "../utils/Requestdata.js";
// 加密发送到后端的密码
import md5 from "js-md5";
// 加密存储在cookie的密码
import CryptoJS from "crypto-js";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  data() {
    return {
      hasErrors,
      username: "",
      password: "",
      checkedval: true,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },

  mounted() {
    this.$nextTick(() => {
      // 在初始化时，禁用登录按钮
      this.form.validateFields();
      // 如存在cookie，获得相应的账户与密码
      this.getCookie();
		});
  },

  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // 将此页面的 router 发送到其它页面
          let pagerouter = this.$router;
          // 将 antd message 钩子发送到其它页面
          let pagemessage = this.$message;
          // md5 加密盐，开发环境的盐应与生产环境的盐不同
          let salt = "kolin";
          loginFun(
            "findstaff/",
            {
              username: values.userName,
              // md5 加密发送到后端
              password: md5(values.password + salt),
            },
            pagerouter,
            "/index",
            pagemessage
					);
          if (this.checkedval == true) {
            // 存储账户与密码到cookie
            this.setCookie(values.userName, values.password, 7);
          } else {
            this.clearCookie();
          }
        }
      });
    },
    // 是否记住密码
    onChange(checked) {
      this.checkedval = checked;
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      // 加密pwd，开发环境与生产环境 salt 应不一样（也就是要换掉kolin）
      let en_pwd = CryptoJS.AES.encrypt(c_pwd, "kolin");
      let exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + en_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function () {
      if (document.cookie.length > 0) {
        let arr = document.cookie.split("; ");
        //这里显示的格式需要切割一下自己可输出看下
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            // 解密pwd，开发环境与生产环境 salt 应不一样（也就是要换掉kolin）
            let en_pwd = CryptoJS.AES.decrypt(arr2[1].toString(), "kolin");
            let de_pwd = en_pwd.toString(CryptoJS.enc.Utf8);
            this.password = de_pwd;
          }
        }
      }
    },
    //清除cookie
    clearCookie: function () {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.loginpagebg {
  background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/loginpagebg.png)
    no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.leftside {
  background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/logo01.png)
    no-repeat;
  background-size: contain;
  position: absolute;
  width: 15%;
  height: 20%;
  top: 1rem;
  left: 2rem;
}

.rightside {
  width: 50%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  overflow: auto;
}

.logintitle {
  margin: 4vw 0 2vw 0;
  text-align: center;
  font-size: 3rem;
}

.weltext {
  display: block;
  margin-bottom: 3vw;
  text-align: center;
  font-size: 1.4rem;
}

.antdinput {
  display: inline-block;
  width: 46vw;
  margin-bottom: 30px;
}

.rememberpw {
  padding: 1vw 0 2vw 0;
  float: left;
}

.forgetpw {
  position: fixed;
  right: 2vw;
  margin-top: 2vw;
}

.antbtngroup {
  width: 100%;
  display: block;
  padding: 20px;
}

.loginbtn {
  width: 22vw;
  height: 50px;
  font-size: 18px;
}

.signupbtn {
  position: fixed;
  width: 22vw;
  height: 50px;
  font-size: 18px;
  right: 2vw;
}

.footertext {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #808080;
  opacity: 0.4;
  mix-blend-mode: difference;
}
</style>
