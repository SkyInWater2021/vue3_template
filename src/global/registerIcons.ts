import type { App } from 'vue'

// SECTION1: 全部导入
import * as icons from '@element-plus/icons-vue'

// SEETION2: 按需加载
// import {} from '@element-plus/icons-vue'
// const icons = []

const registerIcons = function (app: App) {
  for (const icon of Object.values(icons)) {
    app.component(icon.name, icon)
  }
}
export default registerIcons
