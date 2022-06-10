import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/index.less'

import globalRegister from './global'

const app = createApp(App)
const pinia = createPinia()

// AIM: 全局注册函数
globalRegister(app)

app.use(pinia)
app.use(router)
app.mount('#app')
