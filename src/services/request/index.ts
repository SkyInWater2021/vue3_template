// TIP: services 的统一出口
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import HXRequest from './request'
import requestConfig from './config'

// AIM: 创建请求实例 requestInstence

/*  TIP: 关于interceptorHooks参数的介绍
 interceptorHooks: {
   requestInterceptor: (config) => {} // 请求成功的拦截
   requestInterceptorCatch: (err) => {} // 请求失败的拦截
   responseInterceptor: (res) => {} // 响应成功的拦截
   responseInterceptorCatch: (err) => {} // 响应失败的拦截
*/
const interceptorHooks = () => {
  return {
    requestInterceptor: (config: AxiosRequestConfig) => config,
    requestInterceptorCatch: (err: any) => err,
    responseInterceptor: (res: AxiosResponse) => res,
    responseInterceptorCatch: (err: any) => err
  }
}

const requestInstence = new HXRequest({
  baseURL: requestConfig.BASE_URL,
  timeout: requestConfig.BASE_TIME_OUT,
  headers: requestConfig.BASE_HEADER,
  interceptorHooks: interceptorHooks()
})

export { requestInstence }
