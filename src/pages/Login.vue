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
          <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
            登录
          </a-button>
          <a-button class="signupbtn" type="dange">
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </div>
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

<style>
  .main {
    width: 100%;
    height: 100%;
  }

  .loginpagebg {
    background: url(https://github.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/blob/master/src/assets/loginpagebg.png?raw=true) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .leftside {
    background: url(https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/src/assets/logo01.png) no-repeat;
    background-size: contain;
    position: absolute;
    width: 15%;
    height: 20%;
    top: -1rem;
    left: 1rem;
  }

  .rightside {
    width: 50%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
  }

  .logintitle {
    margin: 10vw 0 2vw 0;
    text-align: center;
    font-size: 3rem;
  }

  .weltext {
    display: block;
    margin-bottom: 6vw;
    text-align: center;
    font-size: 1rem;
  }

  .ant-form-item {
    width: 40vw;
    display: grid;
    left: 5vw;
  }

  .ant-form-item-control-wrapper {
    width: 100%;
    margin-bottom: 1rem;
  }

  .ant-input {
    height: 4rem;
    font-size: 1rem;
  }

  .ant-btn {
    width: 48%;
    height: 3rem;
    border-radius: 50px;
    margin-top: 2rem;
  }

  .signupbtn {
    float: right;
    border-color: #4D4F5C;
    color: #4D4F5C;
  }
</style>
