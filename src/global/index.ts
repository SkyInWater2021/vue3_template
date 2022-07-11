// TIP: global 文件夹的统一出口
import type { App } from 'vue'
import registerElementIcons from './registerIcons'

const globalRegister = (app: App) => {
  registerElementIcons(app)
}
export default globalRegister
