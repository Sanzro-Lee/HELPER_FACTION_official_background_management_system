<template>
  <div class="main">
    <div class="loginpagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你登录你的账号</span>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
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
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
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
          </a-input>
        </a-form-item>
        <a-form-item :style="{ display: 'block' }">
          <div class="rememberpw">
            <a-switch default-checked @change="onChange" />
            <span :style="{ marginLeft: '20px' }">记住密码</span>
          </div>
          <router-link class="forgetpw" to="/forgetpw">忘记密码</router-link>
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
import { axiosFun } from "../utils/Requestdata.js"

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
					let pagerouter = this.$router
					let pagemessage = this.$message
					axiosFun("findstudent/", {
						id: Number(values.userName),
						name: values.password
					}, pagerouter, "/index", pagemessage)
        }
      });
    },
    // checkbox remember password
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
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
  margin-left: 2vw;
  margin-bottom: 40px;
}

.rememberpw {
  padding: 2vw;
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
  left: 2vw;
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
