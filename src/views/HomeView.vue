<script setup lang="ts">
import { userStores } from '@/stores/user'
const userStore = userStores()
// setTimeout(async () => {
  // const res = userStore.getLoginUser()
  // console.log(res)
// }, 2000)

</script>

<template>
  {{ userStore }}
</template>

<style scoped></style>
