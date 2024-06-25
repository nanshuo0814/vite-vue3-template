<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { CaptchaControllerService, UserControllerService, type UserLoginRequest } from '../../../generated'
import { Message } from '@arco-design/web-vue'

// 表单数据
const form = reactive({
  userAccount: '',
  userPassword: '',
  imageCaptcha: '',
  captchaKey: ''
} as UserLoginRequest)

// 表单校验规则
const rules = {
  userAccount: [
    {
      required: true,
      message: '账号不能为空'
    },
    {
      minLength: 3,
      message: '账号长度不能小于3'
    }
  ],
  userPassword: [
    {
      required: true,
      message: '密码不能为空'
    },
    {
      minLength: 6,
      message: '密码长度不能小于6'
    },
    {
      maxLength: 20,
      message: '密码长度不能大于20'
    }
  ],
  imageCaptcha: [
    {
      required: true,
      message: '验证码不能为空'
    }
  ]
}

// 提交表单
const formRef = ref(null)
const handleSubmit = async () => {
  try {
    // 校验表单
    const valid = await formRef.value.validate()
    // console.log(valid)
    if (valid) {
      Message.warning({ content: '请将表单填写完整！', closable: true })
      return
    }
    const response = await UserControllerService.userLoginUsingPost(form)
    // console.log(response)
    if (response.code === 20000) {
      // 登录成功
      Message.success({
        content: '登录成功！',
        closable: true
      })
      // 跳转到首页
      window.location.href = '/'
    } else {
      // 登录失败
      Message.error({
        content: response.message,
        closable: true
      })
      refreshCode()
      form.imageCaptcha = ''
    }
  } catch (error) {
    console.error('登录失败', error)
    // 清空表单
    formRef.value.resetFields()
  }
}

// 图片验证码状态
const captchaImageSrc = ref('')

// 初始化加载验证码
onMounted(() => {
  fetchCaptcha()
})

// 请求验证码图片
async function fetchCaptcha() {
  try {
    const response = await CaptchaControllerService.getImageCaptchaUsingGet()
    captchaImageSrc.value = response.data.captcha // 假设返回的数据结构中包含imageUrl字段
    form.captchaKey = response.data.captchaKey
  } catch (error) {
    console.error('获取验证码失败', error)
  }
}

// 刷新验证码
function refreshCode() {
  fetchCaptcha()
}

</script>

<template>
  <div id="app">
    <div class="login-page">
      <a href="/" class="logo-link">
        <div class="login-logo">
          <img style="width: 44px;height: 100%" src="@/assets/favicon.png" alt="logo" />
          <span style="font-weight: bolder">烁烁南光</span>
        </div>
      </a>
      <div class="form-login-container">
        <div class="login-title">
          <div class="login-title-text">
            <span class="login-title-text-span">欢迎来到登录界面，请登录</span>
          </div>
        </div>
        <div class="form-login">
          <a-form ref="formRef" :model="form" :style="{width:'330px'}" auto-label-width @submit="handleSubmit"
                  :rules="rules">
            <a-form-item field="userAccount" label="账号" validate-trigger="blur" hide-asterisk>
              <a-input v-model="form.userAccount" placeholder="请输入账号" />
            </a-form-item>
            <a-form-item field="userPassword" label="密码" validate-trigger="blur" hide-asterisk>
              <a-input-password v-model=" form.userPassword
            " placeholder="请输入你的密码" />
            </a-form-item>
            <a-form-item field="imageCaptcha" label="验证码" validate-trigger="blur" hide-asterisk>
              <a-input v-model="form.imageCaptcha" placeholder="请输入图片验证码" />
              <img style="cursor: pointer;margin-left: 5px;width: 40%;height: 32px;"
                   :src="captchaImageSrc"
                   alt="图片验证码" @click="refreshCode()">
            </a-form-item>
            <a-form-item style="text-align: right">
              <a-button style="width: 100%" type="primary" html-type="submit">登录</a-button>
            </a-form-item>
          </a-form>
          <div class="login-footer-top">
            <a href="/user/forgotPassword" target="_blank">
              <span>忘记密码</span>
            </a>
            <a href="/user/register">
              <span>未有账号？去注册</span>
            </a>
          </div>
          <div class="login-footer-center">
            <span>注册登录即表示同意 <a href="/" target="_blank">用户协议</a> 和 <a href="/"
                                                                                    target="_blank">隐私政策</a></span>
          </div>
          <div class="login-footer-bottom">
            <div class="login-footer-text">
              <span class="login-footer-text-span">Copyright © 2024 - 至今 </span>
              <span class="login-footer-text-span"> </span>
              <span class="login-footer-text-span">保留所有权利</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
}

.login-page {
  background: url("@/assets/background.png") 0 0 / 100% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-login-container {
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 386px;
  height: 408px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
}

.form-login {
  margin-top: 10px;
}

.arco-form-item-content-flex {
  justify-content: center;

}

.arco-btn-secondary {
  width: 100%;
}

.login-logo {
  display: flex;
  align-items: center;
}

.login-logo span {
  font-size: 33px;
  color: #1890FF;
  margin-left: 10px;
  font-weight: 500;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.45);
}

.login-footer-top {
  width: 272px;
  margin-left: 60px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 20px;
  cursor: pointer;
}

.login-footer-top a {
  color: #1890FF;
  text-decoration: none;
}

.login-footer-center {
  text-align: center;
  margin-bottom: 10px;
}

.login-footer-center a {
  color: #1890FF;
  text-decoration: none;
}

.login-footer-bottom {
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 20px;
}

.logo-link {
  text-decoration: none;
}
</style>
