<template>
  <div class="main">
    <div class="signuppagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你注册你的账号</span>
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
          <a-input
            type="password"
            placeholder="请在输入一次上面的密码"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
          <a-input
            placeholder="请输入手机号码"
          >
            <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
          <a-input
            placeholder="收到的验证码"
          >
            <a-icon slot="prefix" type="message" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
            确认
          </a-button>
          <a-button class="signupbtn" type="dange">
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
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    }
  },

  components: {
    
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
  },
}
</script>

<style scoped>
  .signuppagebg {
    background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/forgetpwbg.png) no-repeat !important;
    background-size: cover !important;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
</style>
