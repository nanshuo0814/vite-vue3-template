<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div id="app">
    <a-result status="403" title="403">
      <template #subtitle> 您无权限访问该资源，未授权访问！ </template>
      <template #extra>
        <a-space>
          <a-button type="primary" @click="router.push('/user/login')">去登录</a-button>
        </a-space>
      </template>
    </a-result>
  </div>
</template>
<style scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>
