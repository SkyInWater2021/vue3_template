// TIP: global 文件夹的统一出口
import registerElementIcons from './registerIcons'
import type { App } from 'vue'

const globalRegister = (app: App) => {
  registerElementIcons(app)
}
export default globalRegister
