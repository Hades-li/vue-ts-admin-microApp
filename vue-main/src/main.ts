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

import QiankunVue from 'qiankun-vue'

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})
Vue.use(QiankunVue)
// Vue.use(regApp)
const qiankunVue = new QiankunVue([
  {
    name: 'dashboard',
    entry: '//localhost:5001',
    activeRule: '/dashboard'
  },
  {
    name: 'example',
    entry: '//localhost:5002',
    activeRule: '/example'
  }
])

Vue.config.productionTip = false

new Vue({
  router,
  store,
  qiankunVue,
  render: (h) => h(App)
}).$mount('#main')
