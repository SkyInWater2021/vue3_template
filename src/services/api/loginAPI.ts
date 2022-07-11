import qs from 'qs'
import { requestInstence } from '../request/index'

const API = {
  userLogin: '/userLogin',
  fetchUserInfo: '/user/getLoginUserName'
}

class LoginApi {
  // TIP: 账号登录
  userLogin = (account: object) => {
    const formData = qs.stringify(account)
    return requestInstence.post({
      url: API.userLogin,
      data: formData
    })
  }

  // TIP: 获取用户信息
  fetchUserInfo = () => {
    return requestInstence.post({
      url: API.fetchUserInfo
    })
  }
}

export default new LoginApi()
