import axios from 'axios'
import { baseUrl } from './baseUrl'
import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    // do something before request is sent
    var token = ''
    if (localStorage.token && localStorage.token !== 'undefined') {
      if (localStorage.token) {
        token = JSON.parse(localStorage.token)
      }
    }

    if (token) {
      // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code == "300") {
        Message.error(res.msg)
    }else if(res.code == "500") {
      Message.error(res.msg)
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 10 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
