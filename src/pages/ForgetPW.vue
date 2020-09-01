<template>
  <div class="main">
    <div class="loginpagebg"></div>
    <div class="leftside"></div>
    <div class="rightside">
      <h1 class="logintitle">叫到帮</h1>
      <span class="weltext">欢迎回来！请你重新设置你的密码</span>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '啊咧？手机号码咧？' }] },
            ]"
            placeholder="请输入绑定的手机号码"
          >
            <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
          <a-input
            placeholder="请输入收到的验证码"
          >
            <a-icon slot="prefix" type="message" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
          <a-input
            v-decorator="[
              'passWord',
              { rules: [{ required: true, message: '啊咧？新密码咧？' }] },
            ]"
            placeholder="请输入新密码"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
          <a-input
            placeholder="请再输一遍新密码"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
            确定
          </a-button>
          <a-button class="signupbtn" type="dange">
            取消
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
    background: url(https://github.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/blob/master/src/assets/signuppagebg.png?raw=true) no-repeat;
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
    overflow: auto;
  }

  .logintitle {
    margin: 5vw 0 2vw 0;
    text-align: center;
    font-size: 3rem;
  }

  .weltext {
    display: block;
    margin-bottom: 4vw;
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
    margin: 2rem 0 2rem 0;
  }

  .signupbtn {
    float: right;
    border-color: #4D4F5C;
    color: #4D4F5C;
  }
</style>
