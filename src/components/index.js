import toast from './Toast/index.js'
import '../icon/iconfont.css'

// 准备好 install 方法给 Vue.use() 使用
export function install (Vue) {
  if (install.installed) return
  install.installed = true

  // 将包装好的 toast 挂到 Vue 原型上，作为 Vue 实例上的方法
  Vue.prototype.$toast = toast
}

// create module definition for Vue.use()
const plugin = { install }

// 当 vue 存在时，自动 install (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// 默认导出 install
export default {
  install
}

/**
 * 打包命令
 * "bulid:lib": "vue-cli-service build --target lib --name toast-designer --dest lib src/components/index.js"
 *  --target 构建的目标  lib | wc | wc-async
 *     lib：库，wc：web component，wc-async：异步的 web component
 *  --name 库或组件的名字
 *      当入口为单一文件时，name 为库或组件的文件名
 *      当入口为 global 表达式时，name 为每个库或组件文件名字的前缀
 *  --dest 输出目录
 *      默认为 dist 目录，也可以修改为自定义的目录
 *  [entry] 打包入口
 *      可以是 .vue 文件，也可以是 .js 文件
 *      当注册多个 web component 时，入口可以是一个 global 表达式，如 components/*.vue
 */
