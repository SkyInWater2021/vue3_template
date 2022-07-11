// TIP: request 的基本配置信息
type TURLMap = 'development' | 'production' | 'test'

const URLMap = {
  development: '/api',
  production: '/',
  test: '/'
}
const BASE_URL = URLMap[process.env.NODE_ENV as TURLMap]
const BASE_TIME_OUT = 10000
const BASE_HEADER = {}
export default {
  BASE_URL,
  BASE_TIME_OUT,
  BASE_HEADER
}
