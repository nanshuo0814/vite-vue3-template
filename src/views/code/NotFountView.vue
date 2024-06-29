<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div id="app">
    <a-result status="404" title="404">
      <template #subtitle> 页面未找到，请检查地址是否正确。 </template>

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
