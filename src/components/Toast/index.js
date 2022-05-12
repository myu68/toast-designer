import Vue from 'vue'
import Toast from './index.vue'
import './theme.less'

// 使用 Vue.extend() 创建 Toast 的构造器
const ToastConstructor = Vue.extend(Toast)
const defaultPosition = 'top-center'

const toast = function (options = {}) {
  const {
    type, msg, duration, position, fullWidth
  } = options

  if (!type && !msg) {
    return null
  }

  // 创建 Toast 实例，通过构造函数传参
  // 并调用 Vue 实例上的 $mount() 手动挂载
  const toastInstance = new ToastConstructor({
    data: {
      type,
      msg,
      duration: duration || 3
    }
  }).$mount()

  let container = document.querySelector('.uco-toast-container')
  let containerClass = 'uco-toast-container'

  if (!container) {
    container = document.createElement('div')
    document.body.appendChild(container)
  }

  containerClass += position ? `${position}` : `${defaultPosition}`
  containerClass += fullWidth ? ' full-width' : ''
  container.className = containerClass

  // 手动把真实 dom 挂到 html 的 body 上
  container.appendChild(toastInstance.$el)

  return toastInstance
}

// 导出包装好的 toast 方法
export default toast
