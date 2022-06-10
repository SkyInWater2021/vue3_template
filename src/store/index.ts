import { defineStore } from 'pinia'
import { userLogin, getUserInfo } from '@/services/api/loginAPI'

export const useLoginStore = defineStore({
  id: 'loginStore',
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async axiosDemo() {
      const login = await userLogin({
        account: 'admin',
        password: '123'
      })
      const userInfo = await getUserInfo()
      console.log(login, userInfo)
    }
  }
})
