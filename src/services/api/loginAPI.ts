import qs from 'qs'
import { requestInstence } from '../request/index'

const API = {
  userLogin: '/userLogin',
  getUserInfo: '/user/getLoginUserName',
  getProName: '/project/getProName',
  getManagerName: '/project/getmanager',
  getPhase: '/project/getPhase'
}

// TIP: 账号登录
export const userLogin = (account: object) => {
  const formData = qs.stringify(account)
  return requestInstence.post({
    url: API.userLogin,
    data: formData
  })
}

// TIP: 获取用户信息
export const getUserInfo = () => {
  return requestInstence.post({
    url: API.getUserInfo
  })
}
