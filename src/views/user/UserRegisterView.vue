<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  CaptchaControllerService,
  UserControllerService,
  type UserRegisterRequest
} from '../../../generated'
import { Message } from '@arco-design/web-vue'
import UserEmailCaptchaType from '@/constant/UserEmailCaptchaType'
import router from '@/router';
import CodeStatus from '@/constant/CodeStatus';

const countdown = ref(300) // 倒计时初始值s
const isCountingDown = ref(false) // 是否正在倒计时
const timer = ref(null) // 存储定时器引用
// 发送验证码函数
const email = ref()
const sendVerificationCode = async () => {
  try {
    // 验证邮箱是否填写
    formRef.value.validateField('email', async (errors) => {
      if (errors) {
        Message.error({
          content: '邮箱格式错误！',
          closable: true
        })
        return
      } else {
        // 这里调用实际发送验证码的API
        // await sendCodeToEmail(form.value.email);
        // 发送验证码逻辑
        email.value = form.email
        try {
          const response = await CaptchaControllerService.sendEmailCaptchaUsingPost(
            email.value,
            UserEmailCaptchaType.REGISTER
          )
          if (response.code === CodeStatus.SUCCESS) {
            // 发送成功
            Message.success({
              content: response.data,
              closable: true
            })
            // 禁用按钮，开始倒计时
            isCountingDown.value = true
            // 开始倒计时
            startCountdown()
          } 
        } catch (error) {
          // 失败
          // Message.error({
          //   content: '邮箱验证码发送失败，系统错误！',
          //   closable: true
          // })
          console.error('邮箱验证码发送失败，系统错误！', error)
          return
        }
      }
    })
  } catch (error) {
    console.error('邮箱验证码发送失败，系统错误！', error)
  }
}

// 倒计时逻辑
const startCountdown = () => {
  timer.value = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer.value)
      countdown.value = 300 // 重置倒计时
      isCountingDown.value = false
    }
  }, 1000)
}

// 表单数据
const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
  userName: '',
  email: '',
  emailCaptcha: ''
} as UserRegisterRequest)

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
    },
    {
      maxLength: 16,
      message: '账号长度不能大于16'
    }
  ],
  userName: [
    {
      required: true,
      message: '用户名不能为空'
    }
  ],
  userPassword: [
    {
      required: true,
      message: '密码不能为空'
    },
    {
      match: /^(?=.*[A-Za-z])(?=.*[\d.!@#$%^&*()])(?:[A-Za-z\d.!@#$%^&*()]){6,16}$/,
      message: '密码至少包含字母和数字，长度在6-16之间'
    }
  ],
  checkPassword: [
    {
      required: true,
      message: '确认密码不能为空'
    },
    {
      minLength: 6,
      message: '确认密码长度不能小于6'
    },
    {
      maxLength: 20,
      message: '确认密码长度不能大于20'
    },
    {
      validator(value, callback) {
        if (value !== form.userPassword) {
          callback('确认密码与密码不一致')
        } else {
          callback()
        }
      },
      message: '确认密码与密码不一致'
    }
  ],
  email: [
    {
      required: true,
      message: '邮箱不能为空'
    },
    {
      type: 'email',
      message: '邮箱格式不正确'
    }
  ],
  emailCaptcha: [
    {
      required: true,
      message: '邮箱验证码不能为空'
    }
  ]
}

// 提交表单
const isLoading = ref(false);
const formRef = ref(null)
const handleSubmit = async () => {
  try {
    isLoading.value = true
    // 校验表单
    const valid = await formRef.value.validate()
    // console.log(valid)
    if (valid) {
      Message.error({
        content: '请补充完整表单！',
        closable: true
      })
      isLoading.value = false
      return
    }
    const response = await UserControllerService.userRegisterUsingPost(form)
    // console.log(response)
    if (response.code === CodeStatus.SUCCESS) {
      // 登录成功
      Message.success({
        content: '注册成功！',
        closable: true
      })
      isLoading.value = false
      // 跳转到登录页
      router.push('/user/login')
    } else {
      // 登录失败
      // Message.error({
      //   content: response.message,
      //   closable: true
      // })
      isLoading.value = false
    }
  } catch (error) {
    // 登录失败
    Message.error({
      content: '注册失败,系统异常！',
      closable: true
    })
    isLoading.value = false
    console.error('注册失败！', error)
    // 清空表单
    formRef.value.resetFields()
  }
}
</script>

<template>
  <div id="app">
    <div class="login-page">
      <a href="/" class="logo-link">
        <div class="login-logo">
          <img style="width: 44px; height: 100%" src="@/assets/favicon.png" alt="logo" />
          <span style="font-weight: bolder">烁烁南光</span>
        </div>
      </a>
      <div class="form-login-container">
        <div class="login-title">
          <div class="login-title-text">
            <span class="login-title-text-span">欢迎来到注册界面，请注册</span>
          </div>
        </div>
        <div class="form-login">
          <a-form ref="formRef" :model="form" :style="{ width: '430px' }" auto-label-width @submit="handleSubmit"
            :rules="rules">
            <a-form-item field="userAccount" label="账号" validate-trigger="blur" hide-asterisk>
              <a-input v-model="form.userAccount" placeholder="请输入账号" />
            </a-form-item>
            <a-form-item field="userName" label="用户名" validate-trigger="blur" hide-asterisk>
              <a-input v-model="form.userName" placeholder="请输入用户名" />
            </a-form-item>
            <a-form-item field="userPassword" label="密码" validate-trigger="blur" hide-asterisk>
              <a-input-password v-model="form.userPassword" placeholder="请输入你的密码" />
            </a-form-item>
            <a-form-item field="checkPassword" label="确认密码" validate-trigger="blur" hide-asterisk>
              <a-input-password v-model="form.checkPassword" placeholder="请输入你的第二遍密码" />
            </a-form-item>
            <a-form-item field="email" label="邮箱" validate-trigger="blur" hide-asterisk>
              <a-input v-model="form.email" placeholder="请输入邮箱" />
              <a-button :disabled="isCountingDown" @click="sendVerificationCode"
                style="cursor: pointer; margin-left: 5px; width: 30%; height: 32px" type="primary">
                {{ isCountingDown ? `${countdown} 秒后重发` : '发送验证码' }}
              </a-button>
            </a-form-item>
            <a-form-item field="emailCaptcha" label="邮箱验证码" validate-trigger="blur" hide-asterisk>
              <a-input v-model="form.emailCaptcha" placeholder="请输入邮箱验证码" />
            </a-form-item>
            <!-- <a-form-item>
              <a-button style="width: 100%" type="primary" html-type="submit">注册</a-button>
            </a-form-item> -->
            <a-form-item style="text-align: right">
              <a-button style="width: 100%" type="primary" html-type="submit" :loading="isLoading">
                <span v-if="isLoading">
                  <a-spin>
                    注册中...
                  </a-spin>
                </span>
                <span v-else>注册</span>
              </a-button>
            </a-form-item>
          </a-form>
          <div class="login-footer-top">
            <a href="/user/forgotPassword" target="_blank">
              <span>忘记密码</span>
            </a>
            <a href="/user/login">
              <span>已有账号？去登录</span>
            </a>
          </div>
          <div class="login-footer-center">
            <span>注册登录即表示同意 <a href="/" target="_blank">用户协议</a> 和
              <a href="/" target="_blank">隐私政策</a></span>
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
  background: url('@/assets/background.png') 0 0 / 100% 100%;
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
  width: 466px;
  height: 508px;
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
  color: #1890ff;
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
  width: 344px;
  margin-left: 78px;
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
  color: #1890ff;
  text-decoration: none;
}

.login-footer-center {
  text-align: center;
  margin-bottom: 10px;
}

.login-footer-center a {
  color: #1890ff;
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
