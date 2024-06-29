import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import UserRoles from '@/constant/UserRoles'
import { UserControllerService } from '../../generated'
import { Message } from '@arco-design/web-vue'

export const userStores = defineStore('user', () => {
  // 用户信息
  const loginUser = reactive({
    userRole: UserRoles.NOT_LOGIN,
    id: '',
    userAccount: '',
    userAvatar: '',
    userEmail: '',
    userGender: '',
    userName: '',
    userProfile: ''
  })

  // 获取登录用户信息
  async function getLoginUser() {
    // 从远程请求获取登录信息
    const res = await UserControllerService.getLoginUserUsingGet()
    if (res.code === 20000) {
      Object.assign(loginUser, {
        userRole: res.data.userRole,
        id: res.data.id,
        userAccount: res.data.userAccount,
        userAvatar: res.data.userAvatar,
        userEmail: res.data.userEmail,
        userGender: res.data.userGender,
        userName: res.data.userName,
        userProfile: res.data.userProfile
      })
    } else {
      clearLoginUser()
    }
  }

  // 清除登录用户信息
  function clearLoginUser() {
    Object.assign(loginUser, {
      userRole: UserRoles.NOT_LOGIN,
      id: '',
      userAccount: '',
      userAvatar: '',
      userEmail: '',
      userGender: '',
      userName: '',
      userProfile: ''
    })
  }

  return { getLoginUser, clearLoginUser, loginUser }
})
