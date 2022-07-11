// DOC: http://www.axios-js.com/zh-cn/docs/
import axios from 'axios'
import type { AxiosInstance } from 'axios'

import type { IHXRequestConfig, IHXRequestInterceptors } from './types'

// AIM: 封装一个request请求类
class HXRequest {
  instence: AxiosInstance
  interceptorHooks?: IHXRequestInterceptors

  constructor(config: IHXRequestConfig) {
    this.instence = axios.create(config)
    this.interceptorHooks = config.interceptorHooks
    this.setupInterceptor()
  }

  setupInterceptor() {
    // STEP1: 如果创建实例时传入了实例的拦截操作,在此实现
    this.instence.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )
    this.instence.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    )

    //  STEP2: 所有实例的拦截器,在此实现
    this.instence.interceptors.request.use(
      (config) => config,
      (err) => err
    )

    this.instence.interceptors.response.use(
      (res) => res,
      (err) => err
    )
  }

  request<T = any>(config: IHXRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // STEP3.1: 某次请求需要执行请求成功的拦截处理
      if (config.interceptorHooks?.requestInterceptor) {
        config = config.interceptorHooks.requestInterceptor(config)
      }
      this.instence
        .request(config)
        .then((response) => {
          // STEP3.2: 某次请求需要执行响应成功的拦截处理
          if (config.interceptorHooks?.responseInterceptor) {
            response = config.interceptorHooks.responseInterceptor(response)
          }
          resolve(response.data)
        })
        .catch((err) => reject(err))
    })
  }

  get(config: IHXRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: IHXRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config: IHXRequestConfig) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config: IHXRequestConfig) {
    return this.request({ ...config, method: 'PATCH' })
  }
  put(config: IHXRequestConfig) {
    return this.request({ ...config, method: 'PUT' })
  }
}

export default HXRequest
