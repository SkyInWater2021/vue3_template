import { defineStore } from 'pinia'
import loginApi from '@/services/api/loginAPI'

export const useLoginStore = defineStore({
  id: 'loginStore',
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async axiosDemo() {
      const login = await loginApi.userLogin({
        account: 'admin',
        password: '123'
      })

      const userInfo = await loginApi.fetchUserInfo()
      console.log(login, userInfo)
    }
  }
})

export const loginStore = useLoginStore()
