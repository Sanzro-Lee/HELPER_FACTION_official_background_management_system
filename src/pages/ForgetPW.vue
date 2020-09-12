<template>
  <div class="main">
    <div class="forgetpwpagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你重新设置你的密码</span>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '啊咧？手机号码咧？' }] },
            ]"
            placeholder="请输入绑定的手机号码"
            class="antdinput"
						size="large"
          >
            <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input placeholder="请输入收到的验证码" class="antdinput" size="large">
            <a-icon slot="prefix" type="message" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'passWord',
              { rules: [{ required: true, message: '啊咧？新密码咧？' }] },
            ]"
            placeholder="请输入新密码"
            class="antdinput"
						size="large"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input placeholder="请再输一遍新密码" class="antdinput" size="large">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item class="antbtngroup">
          <a-button
            class="loginbtn"
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
            shape="round"
          >确定</a-button>
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

  components: {},

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
          console.log("Received values of form: ", values);
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

.forgetpwpagebg {
  background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/signuppagebg.png)
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
  margin-left: 2vw;
  margin-bottom: 40px;
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
  padding: 20px;
}

.loginbtn {
  width: 22vw;
  height: 50px;
  font-size: 18px;
  left: 1vw;
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
