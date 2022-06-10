// TIP: services 的统一出口
import HXRequest from './request'
import { BASE_URL, BASE_HEADER, TIME_OUT } from './config'

// AIM: 创建请求实例 requestInstence

/*  TIP: 关于interceptorHooks参数的介绍
 interceptorHooks: {
   requestInterceptor: (config) => {} // 请求成功的拦截
   requestInterceptorCatch: (err) => {} // 请求失败的拦截
   responseInterceptor: (res) => {} // 响应成功的拦截
   responseInterceptorCatch: (err) => {} // 响应失败的拦截
*/

const requestInstence = new HXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: BASE_HEADER,
  interceptorHooks: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export { requestInstence }
