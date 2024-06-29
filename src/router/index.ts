import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import { userStores } from '@/stores/user'
import pinia from '../stores/store';
import UserRoles from '@/constant/UserRoles'
const userStore = userStores(pinia);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  // console.log("登陆用户信息", userStore.loginUser);
  let loginUser = userStore.loginUser;
  // 如果之前没登陆过，自动登录
  if (!loginUser || !loginUser.userRole) {
    // 加 await 是为了等用户登录成功之后，再执行后续的代码
    await userStore.getLoginUser()
    loginUser = userStore.loginUser;
  }
  const needAccess = (to.meta?.access as string) ?? UserRoles.NOT_LOGIN;
  // 要跳转的页面必须要登陆
  if (needAccess !== UserRoles.NOT_LOGIN) {
    // 如果没登陆，跳转到登录页面
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === UserRoles.NOT_LOGIN
    ) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果已经登陆了，但是权限不足，那么跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/NoPermission");
      return;
    }
  }
  next();
});

const checkAccess = (loginUser: any, needAccess = UserRoles.NOT_LOGIN) => {
  // 获取当前登录用户具有的权限（如果没有 loginUser，则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? UserRoles.NOT_LOGIN;
  if (needAccess === UserRoles.NOT_LOGIN) {
    return true;
  }
  // 如果用户登录才能访问
  if (needAccess === UserRoles.USER) {
    // 如果用户没登录，那么表示无权限
    if (loginUserAccess === UserRoles.NOT_LOGIN) {
      return false;
    }
  }
  // 如果需要管理员权限
  if (needAccess === UserRoles.ADMIN) {
    // 如果不为管理员，表示无权限
    if (loginUserAccess !== UserRoles.ADMIN) {
      return false;
    }
  }
  return true;
};


export default router
