import { createApp } from 'vue'
import pinia from './stores/store'; // 引入创建好的 pinia 实例
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import App from './App.vue'
import router from './router'
import '@/plugins/axios'; 

const app = createApp(App)

app.use(ArcoVue)
app.use(pinia)
app.use(router)

app.mount('#app')

