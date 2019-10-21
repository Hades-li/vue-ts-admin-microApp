import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = new Vue({
  router,
  render: h => h(App),
}).$mount()

export async function bootstrap() {
  console.log('app2 bootstraped');
}

export async function mount(props) {
  console.log('app2 from main framework', props);
  document.getElementById('vueRoot2').appendChild(instance.$el)
}

export async function unmount() {
  console.log('vueapp2 unmount')
}
