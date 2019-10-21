import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let instance = new Vue({
  router,
  render: h => h(App),
}).$mount()

export async function bootstrap() {
  console.log('app1 bootstraped');
}

export async function mount(props) {
  console.log('app1 from main framework', props)
  document.getElementById('vueRoot').appendChild(instance.$el)
  // console.log(instance)
}

export async function unmount() {
  console.log('vueapp unmount')
  // instance.$router.beforeHooks.splice(0, instance.$router.beforeHooks.length)
}
