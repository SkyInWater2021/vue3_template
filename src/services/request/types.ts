import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IHXRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface IHXRequestConfig extends AxiosRequestConfig {
  interceptorHooks?: IHXRequestInterceptors
}
