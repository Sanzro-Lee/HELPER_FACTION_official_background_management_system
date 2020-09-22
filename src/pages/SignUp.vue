<template>
  <div class="main">
    <div class="signuppagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你注册你的账号</span>
      <a-form layout="inline" :form="form" @submit="handleSubmit" :style="{marginLeft: '2vw'}">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
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
          :validate-status="phoneNumError() ? 'error' : ''"
          :help="phoneNumError() || ''"
        >
          <a-input
            v-decorator="[
              'phoneNum',
              { rules: [{ required: true, message: '啊咧？手机号码咧？' }] },
            ]"
            placeholder="请输入手机号码"
            class="antdinput"
            size="large"
            type="number"
          >
            <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input-password
            v-decorator="[
              'password',
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
        <a-form-item
          :validate-status="secondPasswordError() ? 'error' : ''"
          :help="secondPasswordError() || ''"
        >
          <a-input-password
            v-decorator="[
						'secondPassword',
						{ rules: [{ required: true, message: '啊咧？密码咧？'}]}
					]"
            type="password"
            class="antdinput"
            size="large"
            placeholder="请在输入一次上面的密码"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item class="antbtngrounp">
          <a-button
            class="loginbtn"
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
            shape="round"
          >确认</a-button>
          <a-button class="signupbtn" type="dange" shape="round">
            <router-link to="/login">取消</router-link>
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <span class="footertext">Powered by Sanzro Design 叫到帮™ HELPER FACTION Copyright © Since 2018</span>
  </div>
</template>

<script>
import { signupFun } from "../utils/Requestdata.js";
import { checkStrong } from "../utils/CheckpassStrong.js";
import md5 from "js-md5";
import { checkLogin } from "../utils/ChekLogin.js";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
		});
		let loginText = window.localStorage.getItem("login")
		if (loginText) {
			checkLogin(this.$router, this.$message)
		}
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    phoneNumError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("phoneNum") && getFieldError("phoneNum");
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    secondPasswordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return (
        isFieldTouched("secondPassword") && getFieldError("secondPassword")
      );
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (values.phoneNum.length != 11) {
          return this.$message.error("你输入的手机号码不是11位");
        } else if (values.password != values.secondPassword) {
          return this.$message.error("注册失败，请输入相同的密码");
        } else {
          let strength = checkStrong(values.password);
          if (!err && strength == 4) {
            let pagerouter = this.$router;
            let pagemessage = this.$message;
            // md5 加密盐，开发环境的盐应与生产环境的盐不同
            let salt = "kolin";
            signupFun(
              "createstaff/",
              {
                id: values.phoneNum,
                username: values.userName,
                password: md5(values.password + salt),
              },
              pagerouter,
              "/login",
              pagemessage
            );
          } else {
            return this.$message.error(
              "注册失败，密码强度不足（至少12位，并包括1个英文标点符号和1个英文字母和1个数字）"
            );
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.signuppagebg {
  background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/forgetpwbg.png)
    no-repeat !important;
  background-size: cover !important;
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
  padding: 2vw;
  float: left;
}

.forgetpw {
  position: absolute;
  right: -34vw;
  margin-top: 2vw;
}

.antbtngroup {
  width: 100%;
  display: block;
}

.loginbtn {
  width: 22vw;
  height: 50px;
  font-size: 18px;
  border-color: #4d4f5c;
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
