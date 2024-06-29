<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div id="app">
    <a-result status="500" title="500">
      <template #subtitle> 抱歉，服务器出错了,请联系管理员。 </template>
      <template #extra>
        <a-space>
          <a-button type="primary" @click="router.push('/')">返回首页</a-button>
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
