import ElSelect from '../packages/el-select'
import HelloWorld from '../packages/hello-world'
const components = [ElSelect, HelloWorld]
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ElSelect,
  HelloWorld
}
