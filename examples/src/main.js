import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { ElSelect, HelloWorld } from 'vue-ui-fix'
// import VueUiFix from 'vue-ui-fix'
// import 'vue-ui-fix/lib/vue-ui-fix.css'
Vue.use(ElementUI)
// Vue.use(VueUiFix)

Vue.use(ElSelect)
Vue.use(HelloWorld)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
