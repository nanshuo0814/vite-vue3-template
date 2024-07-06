<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <a-watermark content="烁烁南光">
    <div id="app">
      <div v-if="$route.meta.show === false ? false : true">
        <a-layout>
          <NavigationBar />
          <div class="content">
            <a-layout-content style="padding-top: 70px">
              <RouterView />
            </a-layout-content>
          </div>
          <Footer />
        </a-layout>
      </div>
      <div v-else>
        <RouterView />
      </div>
    </div>
  </a-watermark>
  <a-back-top :visible-height="10" />
</template>

<style scoped>
/* #app {
  min-height: 100vh;
  overflow: auto;
} */

.content {
  margin-top: 25px;
  padding: 0px 50px 0px 50px;
}
</style>
