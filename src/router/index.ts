import { createRouter, createWebHistory } from 'vue-router'
import UserLoginView from '@/views/user/UserLoginView.vue'
import UserRegisterView from '@/views/user/UserRegisterView.vue'
import HomeView from '@/views/HomeView.vue'
import UserForgotPasswordView from '@/views/user/UserForgotPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: HomeView
    },
    {
      path: '/user/login',
      name: '登录页',
      component: UserLoginView
    },
    {
      path: '/user/register',
      name: '注册页',
      component: UserRegisterView
    },
    {
      path: '/user/forgotPassword',
      name: '忘记密码页',
      component: UserForgotPasswordView
    }
  ]
})

export default router
