<script setup lang="ts">
import UserRoles from '@/constant/UserRoles'
import router from '@/router'
import { userStores } from '@/stores/user'
import { UserControllerService } from '../../generated'
import { onMounted, ref, watchEffect } from 'vue'
import { Message } from '@arco-design/web-vue'

const userStore = userStores()

function goToHome() {
  router.push('/')
}

const userAvatar = ref('')

// 异步函数来获取用户信息
async function fetchUserInfo() {
  try {
    await userStore.getLoginUser() // 假设 getLoginUser 返回一个 Promise
    userAvatar.value = userStore.loginUser.userAvatar // 更新用户头像
  } catch (error) {
    console.error('Failed to fetch user info:', error)
  }
}

async function handleSelect(value) {
  // 处理下拉菜单选择事件
  if (value.value === 'userInfo') {
    // 显示用户信息
    router.push('/user/info')
  } else if (value.value === 'exit') {
    // 注销登录
    UserControllerService.userLogoutUsingPost()
    // 刷新页面
    window.location.reload()
  }
}

function navigateToLogin() {
  // 导航到登录页面
  router.push('/user/login')
}

// 检查用户是否登录时，确保 loginUser 已经初始化
function isLoggedIn() {
  return userStore.loginUser && userStore.loginUser.userRole !== UserRoles.NOT_LOGIN
}
const selectedKeys = ref<string[]>([])
// 监听路由变化并更新 selectedKeys
watchEffect(() => {
    const currentRoute = router.currentRoute.value
    if (currentRoute.path === '/') {
        selectedKeys.value = ['1']
    } else if (currentRoute.path === '/user/login') {
        selectedKeys.value = ['2']
    } else if (currentRoute.path === '/learning') {
        selectedKeys.value = ['3']
    } else if (currentRoute.path === '/interview') {
        selectedKeys.value = ['4']
    } else if (currentRoute.path === '/tools') {
        selectedKeys.value = ['5']
    } else if (currentRoute.path === '/recommend') {
        selectedKeys.value = ['6']
    } 
})
// 处理菜单项点击事件
const handleMenuItemClick = (key: string) => {
  // 根据 key 跳转到不同的路由
  switch (key) {
    case '1':
      router.push('/')
      break
    case '2':
      router.push('/user/login')

      break
    case '3':
      router.push('/learning')
      break
    case '4':
      router.push('/interview')
      break
    case '5':
      router.push('/tools')
      break
    case '6':
      router.push('/recommend')
      break

    default:
      // 处理默认情况或未知路由
      break
    }
    // 更新 selectedKeys
    selectedKeys.value = [key]
}

onMounted(fetchUserInfo) // 在组件挂载时获取用户信息
</script>

<template>
  <div class="header">
    <a-layout-header style="position: fixed; top: 0; width: 100%; z-index: 999">
      <div class="menu-content">
        <div class="menu">
          <div class="menu-left menu-item">
            <a-space class="menu-logo-space" align="center" @click="goToHome">
              <a-avatar :size="36" shape="square" @click="goToHome">
                <img alt="avatar" src="@/assets/favicon.png" />
              </a-avatar>
              <span style="font-size: 18px; color: #1890ff; font-weight: 500" @click="goToHome"
                >烁烁南光</span
              >
            </a-space>
          </div>
          <div class="menu-center menu-item">
            <a-menu
              mode="horizontal"
              :selected-keys="selectedKeys"
              @menu-item-click="handleMenuItemClick"
              :default-selected-keys="['1']"
            >
              <a-menu-item key="1">首页</a-menu-item>
              <a-menu-item key="2">项目</a-menu-item>
              <a-menu-item key="3">学习</a-menu-item>
              <a-menu-item key="4">面试</a-menu-item>
              <a-menu-item key="5">工具</a-menu-item>
              <a-menu-item key="6">精选</a-menu-item>
            </a-menu>
          </div>
          <div class="menu-right menu-item">
            <a-input-search
              allow-clear
              :style="{ width: '250px', height: '32px' }"
              style="margin-top: 10px; margin-right: 15px"
              placeholder="搜索框"
              search-button
            />
            <div class="menu-right-avatar">
              <!-- 使用 v-if 控制下拉菜单的显示 -->
              <a-dropdown v-if="isLoggedIn()" position="tr" @select="handleSelect" trigger="hover">
                <!-- 用户已登录且头像不为空 -->
                <div v-if="userAvatar !== ''">
                  <a-avatar :image-url="userAvatar"></a-avatar>
                </div>
                <!-- 默认头像 -->
                <div v-else>
                  <a-avatar> 默认头像 </a-avatar>
                </div>
                <template #content>
                  <a-doption :value="{ value: 'userInfo' }">个人信息</a-doption>
                  <a-doption :value="{ value: 'exit' }">注销登录</a-doption>
                </template>
              </a-dropdown>
              <!-- 如果用户未登录 -->
              <div v-else>
                <a-avatar @click="navigateToLogin"> 未登录 </a-avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-layout-header>
  </div>
</template>

<style scoped>
.arco-layout-header {
  background-color: var(--color-menu-light-bg);
}

.menu-content {
  /* box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12); */
  margin-top: 6px;
  /* margin-bottom: 10px; */
  border-bottom: 1px solid rgba(0, 21, 41, 0.12);
}

.menu {
  display: flex;
  justify-content: space-between;
}

.menu-item {
  display: flex;
  justify-content: center;
}

.menu-right-avatar {
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
}

.menu-left {
  width: 30%;
}

.menu-center {
  width: 40%;
}

.menu-right {
  width: 30%;
}

.menu-logo-space {
  width: 150px;
  /* margin-left: 30px; */
  cursor: pointer;
}
</style>
