<template>
  <div class="main">
    <div class="loginpagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你登录你的账号</span>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '啊咧？用户名咧？' }] },
            ]"
            placeholder="请输入用户名"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '啊咧？密码咧？' }] },
            ]"
            type="password"
            placeholder="请输入密码"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <div class="rememberpw">
            <a-switch default-checked @change="onChange" />
            <span :style="{marginLeft: '20px'}">记住密码</span>
          </div>
          <router-link class="forgetpw" to="/forgetpw">忘记密码</router-link>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
            登录
          </a-button>
          <a-button class="signupbtn" type="dange">
            <router-link to="/signup">注册</router-link>
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <span class="footertext">Powered by Sanzro Design 叫到帮™ HELPER FACTION Copyright © Since 2018</span>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    }
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
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    // checkbox remember password
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
}
</script>

<style scoped>
  @import './beforeLogin.css';

  .loginpagebg {
    background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/loginpagebg.png) no-repeat !important;
    background-size: cover !important;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
</style>
