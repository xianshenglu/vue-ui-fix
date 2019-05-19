import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { ElSelect, HelloWorld } from 'vue-ui-fix'

Vue.use(ElementUI)

Vue.use(ElSelect)
Vue.use(HelloWorld)
// todo remove
// window.vue = Vue
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
