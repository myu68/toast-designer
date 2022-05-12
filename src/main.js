import Vue from 'vue'
import App from './App'
import toast from './components/index.js'
import './directives/highlight'

Vue.config.productionTip = false

Vue.use(toast)
Vue.prototype.$bus = new Vue() // 使用 $bus 作为父子组件的事件监听

new Vue({
  render: (h) => h(App)
}).$mount('#app')
