<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  CaptchaControllerService,
  UserControllerService,
  type UserResetPwdRequest
} from '../../../generated'
import { Message } from '@arco-design/web-vue'
import UserEmailCaptchaType from '@/constant/UserEmailCaptchaType'
import CodeStatus from '@/constant/CodeStatus';

// 定义进度状态
const progressSteps = ref(4)
const currentProgress = ref(0)

// 发送邮件和验证过程的函数
const formRef = ref(null)
const isLoading = ref(false)
const sendEmail = async () => {
  try {
    isLoading.value = true
    // 验证邮箱是否填写
    formRef.value.validateField('email', async (errors) => {
      if (errors) {
        Message.error({
          content: '邮箱格式错误！',
          closable: true
        })
        isLoading.value = false
        return
      } else {
        // 发送验证码逻辑
        const response = await CaptchaControllerService.sendEmailCaptchaUsingPost(
          form.email,
          UserEmailCaptchaType.RESET
        )
        // console.log(response)
        if (response.code === CodeStatus.SUCCESS) {
          // 发送成功
          Message.success({
            content: response.data,
            closable: true
          })
          isLoading.value = false
          currentProgress.value = 1 // 发送邮件成功后，进度到第二步
        } else {
          // 失败
          // Message.error({
          //   content: response.message,
          //   closable: true
          // })
          isLoading.value = false
        }
      }
    })
  } catch (error) {
    isLoading.value = false
    console.error('邮箱验证码发送失败，系统错误！', error)
  }
}

const verifyCode = async () => {
  // 这里应该有验证逻辑，简化处理直接进入下一步
  try {
    isLoading.value = true
    // 验证验证码逻辑
    const response = await CaptchaControllerService.checkEmailCaptchaUsingPost(
      form.code,
      form.email,
      UserEmailCaptchaType.RESET
    )
    // console.log(response)
    if (response.code === CodeStatus.SUCCESS) {
      // 验证成功
      Message.success({
        content: response.message,
        closable: true
      })
      isLoading.value = false
      form.voucher = response.data
      currentProgress.value = 2
    } else {
      // 失败
      // Message.error({
      //   content: response.message,
      //   closable: true
      // })
      isLoading.value = false
    }
  } catch (error) {
    isLoading.value = false
    console.error('验证码验证失败，系统错误！', error)
  }
}

const resetPassword = async () => {
  // 密码重置逻辑
  try {
    isLoading.value = true
    const response = await UserControllerService.userResetPwdByEmailUsingPost(form)
    // console.log(response)
    if (response.code === CodeStatus.SUCCESS) {
      // 验证成功
      Message.success({
        content: response.data,
        closable: true
      })
      isLoading.value = false
      currentProgress.value = 3
    } else {
      // 失败
      // Message.error({
      //   content: response.message,
      //   closable: true
      // })
      isLoading.value = false
    }
  } catch (error) {
    isLoading.value = false
    console.error('重置密码失败，系统错误！', error)
  }
}
// 添加一个方法用于获取步骤的标签文本
const getCurrentStepDescription = (): string => {
  switch (currentProgress.value) {
    case 0:
      return '步骤1：输入邮箱'
    case 1:
      return '步骤2：验证邮箱'
    case 2:
      return '步骤3：设置新密码'
    case 3:
      return '步骤4：密码已重置，请登录'
    default:
      return ''
  }
}
// 添加返回上一步的方法
const goToPreviousStep = () => {
  if (currentProgress.value > 0) {
    currentProgress.value -= 1
  }
}
const form = reactive({
  email: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
  voucher: ''
} as UserResetPwdRequest)
const rules = {
  email: [
    { required: true, message: '邮箱不能为空' },
    { type: 'email', message: '请输入正确的邮箱地址' }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空'
    }
  ],
  newPassword: [
    {
      required: true,
      message: '密码不能为空'
    },
    {
      match: /^(?=.*[A-Za-z])(?=.*[\d.!@#$%^&*()])(?:[A-Za-z\d.!@#$%^&*()]){6,16}$/,
      message: '密码至少包含字母和数字，长度在6-16之间'
    }
  ],
  confirmPassword: [
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
        if (value !== form.newPassword) {
          callback('确认密码与密码不一致')
        } else {
          callback()
        }
      },
      message: '确认密码与密码不一致'
    }
  ]
}
</script>

<template>
  <div id="app">
    <div class="reset-password-container">
      <a-form :rules="rules" ref="formRef" size="large" :model="form">
        <div class="content">
          <div class="content-top">
            <h1>找回密码</h1>
            <div class="progress-step-description" v-if="currentProgress >= 0">
              {{ getCurrentStepDescription() }}
            </div>
            <a-progress
              animation
              :steps="progressSteps"
              :percent="(currentProgress + 1) / progressSteps"
            />
          </div>
          <div class="content-center">
            <div v-if="currentProgress === 0">
              <!-- 添加返回按钮逻辑，但此处为第一步，不需要返回按钮 -->
              <h2>输入绑定的邮箱地址</h2>
              <a-form-item validate-trigger="blur" field="email" hide-label hide-asterisk>
                <a-input v-model="form.email" placeholder="请输入邮箱地址" />
              </a-form-item>
              <a-button type="primary" @click="sendEmail" :loading="isLoading"
                ><span v-if="isLoading">
                  <a-spin> Loading... </a-spin>
                </span>
                <span v-else>发送验证码</span></a-button
              >
            </div>
            <div v-else-if="currentProgress === 1">
              <a-button type="primary" @click="goToPreviousStep">上一步</a-button>
              <h2>输入收到的验证码</h2>
              <a-form-item validate-trigger="blur" field="code" hide-label hide-asterisk>
                <a-input v-model="form.code" placeholder="请输入验证码" />
                <a-button type="primary" @click="verifyCode('your-code')" :loading="isLoading"
                  ><span v-if="isLoading">
                    <a-spin> Loading... </a-spin>
                  </span>
                  <span v-else>验证</span></a-button
                >
              </a-form-item>
            </div>
            <div v-else-if="currentProgress === 2">
              <a-button type="primary" @click="goToPreviousStep">上一步</a-button>
              <h2>设置新密码</h2>
              <a-form-item validate-trigger="blur" field="newPassword" hide-label hide-asterisk>
                <a-input-password v-model="form.newPassword" placeholder="新密码" />
              </a-form-item>
              <a-form-item validate-trigger="blur" field="confirmPassword" hide-label hide-asterisk>
                <a-input-password v-model="form.confirmPassword" placeholder="确认新密码" />
              </a-form-item>
              <a-form-item validate-trigger="blur" field="" hide-label hide-asterisk>
                <a-button type="primary" @click="resetPassword" :loading="isLoading"
                  ><span v-if="isLoading">
                    <a-spin> Loading... </a-spin>
                  </span>
                  <span v-else>完成重置</span></a-button
                >
              </a-form-item>
            </div>
            <div v-else-if="currentProgress === 3">
              <a-result status="success" title="温馨提示">
                <template #subtitle> 您的密码已重置，请去登录 </template>
                <template #extra>
                  <a-space>
                    <a-button href="/user/login" type="primary">去登录</a-button>
                  </a-space>
                </template>
              </a-result>
            </div>
          </div>
          <div class="content-bottom">
            <span class="login-footer-text-span">Copyright © 2024 - 至今 </span>
            <span class="login-footer-text-span">
              by
              <strong
                ><a target="_blank" href="https://github.com/nanshuo0814">南烁</a></strong
              ></span
            >
            <span class="login-footer-text-span"> 保留所有权利</span>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  display: flex;
  background: url('@/assets/background.png') 0 0 / 100% 100%;
}
.reset-password-container {
  width: 100%;
  max-width: 400px;
  margin: 100px auto;
}

.content-top h1 {
  text-align: center;
}

.content-center {
  padding: 20px;
}

.content-center input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.content-center button {
  width: 100%;
  padding: 10px;
  background-color: #0099ff;
  color: white;
  border: none;
  cursor: pointer;
}

.progress-steps span {
  font-size: 14px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.progress-steps span.active {
  opacity: 1;
  font-weight: bold;
}

.progress-step-description {
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.content-bottom {
  position: fixed;
  bottom: 0;
  left: 0; /* 确保从左侧开始 */
  right: 0; /* 确保到右侧结束，与left: 0;一起实现全宽效果 */
  width: 100%;
  background-color: #f8f9fa; /* 示例背景色，可按需调整 */
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
  z-index: 1000; /* 可选，确保底部栏在最上层，避免被其他内容遮挡 */
}
</style>
