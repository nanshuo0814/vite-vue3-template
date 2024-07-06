import UserLoginView from '@/views/user/UserLoginView.vue'
import UserRegisterView from '@/views/user/UserRegisterView.vue'
import HomeView from '@/views/HomeView.vue'
import UserForgotPasswordView from '@/views/user/UserForgotPasswordView.vue'
import NotFountView from '@/views/code/NotFountView.vue'
import NoPermissionView from '@/views/code/NoPermissionView.vue'
import SystemErrorView from '@/views/code/SystemErrorView.vue'
import type { RouteRecordRaw } from 'vue-router'
import UserRoles from '@/constant/UserRoles'
import UserInfoView from '@/views/user/UserInfoView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: HomeView,
    // meta: {
    //   access: UserRoles.ADMIN
    // }
  },
  {
    path: '/user/login',
    name: '登录页',
    component: UserLoginView,
    meta: {
      show: false
    }
  },
  {
    path: '/user/register',
    name: '注册页',
    component: UserRegisterView,
    meta: {
      show: false
    }
  },
  {
    path: '/user/forgotPassword',
    name: '忘记密码页',
    component: UserForgotPasswordView,
    meta: {
      show: false
    }
  },
  {
    path: '/user/info',
    name: '用户信息页',
    component: UserInfoView
  },
  {
    path: '/NoPermission',
    name: '403',
    component: NoPermissionView,
    meta: {
      show: false
    }
  },
  {
    path: '/:catchAll(.*)', // 使用通配符匹配所有未匹配到的路径
    name: '404',
    component: NotFountView,
    meta: {
      show: false
    }
  },
  {
    path: '/systemError',
    name: '500',
    component: SystemErrorView,
    meta: {
      show: false
    }
  }
]
