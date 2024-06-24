<script setup lang="ts">
import { ref } from 'vue'

// 定义进度状态
const progressSteps = ref(4)
const currentProgress = ref(0)

// 模拟发送邮件和验证过程的函数
const sendEmail = async () => {
  // 模拟异步操作，这里仅作示例
  await new Promise(resolve => setTimeout(resolve, 1000))
  currentProgress.value = 1 // 发送邮件成功后，进度到第二步
}

const verifyCode = (code: string) => {
  // 这里应该有验证逻辑，简化处理直接进入下一步
  currentProgress.value = 2
}

const resetPassword = () => {
  // 密码重置逻辑
  currentProgress.value = 3
}
// 添加一个方法用于获取步骤的标签文本
const getCurrentStepDescription = (): string => {
  switch (currentProgress.value) {
    case 0: return '步骤1：输入邮箱';
    case 1: return '步骤2：验证邮箱';
    case 2: return '步骤3：设置新密码';
    case 3: return '步骤4：密码已重置，请登录';
    default: return '';
  }
};
// 添加返回上一步的方法
const goToPreviousStep = () => {
  if (currentProgress.value > 0) {
    currentProgress.value -= 1;
  }
};
</script>

<template>
  <div id="app" class="reset-password-container">
    <div class="content">
      <div class="content-top">
        <h1>找回密码</h1>
        <div class="progress-step-description" v-if="currentProgress >= 0">
          {{ getCurrentStepDescription() }}
        </div>
        <a-progress animation :steps="progressSteps" :percent="(currentProgress + 1) / progressSteps" />
<!--        <a-progress animation :steps="progressSteps" :percent="(currentProgress + 1) / progressSteps" />-->
      </div>
      <div class="content-center">
        <div v-if="currentProgress === 0">
          <!-- 添加返回按钮逻辑，但此处为第一步，不需要返回按钮 -->
          <h2>输入绑定的邮箱地址</h2>
          <input type="email" placeholder="请输入邮箱地址" />
          <button @click="sendEmail">发送验证码</button>
        </div>
        <div v-else-if="currentProgress === 1">
          <button @click="goToPreviousStep">上一步</button>
          <h2>输入收到的验证码</h2>
          <input type="text" placeholder="请输入验证码" />
          <button @click="verifyCode('your-code')">验证</button>
        </div>
        <div v-else-if="currentProgress === 2">
          <button @click="goToPreviousStep">上一步</button>
          <h2>设置新密码</h2>
          <input type="password" placeholder="新密码" />
          <input type="password" placeholder="确认新密码" />
          <button @click="resetPassword">完成重置</button>
        </div>
        <div v-else-if="currentProgress === 3">
          <a-result status="success" title="温馨提示" >
            <template #subtitle>
              您的密码已重置，请去登录
            </template>
            <template #extra>
              <a-space>
                <a-button href="/user/login" type='primary'>去登录</a-button>
              </a-space>
            </template>
          </a-result>
        </div>
      </div>
      <div class="content-bottom">
        <span class="login-footer-text-span">Copyright © 2024 - 至今 </span>
        <span class="login-footer-text-span"> by <strong><a target="_blank" href="https://github.com/nanshuo0814">南烁</a></strong></span>
        <span class="login-footer-text-span"> 保留所有权利</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
