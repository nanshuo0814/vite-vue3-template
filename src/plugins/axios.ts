import router from '@/router'
import { Message } from '@arco-design/web-vue'
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log('我发送请求啦~', config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // console.log('响应', response)
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code !== 20000) {
      // router.push('/systemError')
      Message.error({
        content: response.data.message,
        closable: true
      })
      if (response.data.code === 40101 || response.data.code === 40300) {
        console.log('无权限')
        router.push('/noPermission')
      }
    }
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (error.response.status === 500) {
      console.log('服务器错误啦~')
      router.push('/systemError')
    }
    return Promise.reject(error)
  }
)
