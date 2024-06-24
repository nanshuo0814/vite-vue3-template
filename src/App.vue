<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import UserGeneral from '@/components/UserGeneral.vue'

const route = useRoute()
</script>

<template>
<!--  <template v-if="route.path.startsWith('/user')">-->
<!--    <user-general/>-->
<!--  </template>-->
  <RouterView />
</template>

<style scoped>
</style>
