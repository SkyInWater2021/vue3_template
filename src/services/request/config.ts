// TIP: request 的基本配置信息
const TIME_OUT = 10000
let BASE_URL = ''
const BASE_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = '/'
}

export { BASE_URL, TIME_OUT, BASE_HEADER }
