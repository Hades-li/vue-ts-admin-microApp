import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/icons/components'
import '@/permission'

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

let app: Vue | undefined = undefined

export async function bootstrap() {
  console.log('example应用初始化')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  Vue.prototype.$isFramework = props.isFramework
  Vue.prototype.$mainApp = props.mainInstance
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    })
  }
  app.$mount('#app')
  props.callback(app)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
export async function unmount() {
  console.log('example应用卸载')
  // 销毁
  if (app) {
    app.$destroy()
    app = undefined
  }
}
