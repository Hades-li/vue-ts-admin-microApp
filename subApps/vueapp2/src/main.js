import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null;

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    el: '#vueRoot2',
    router,
    render: h => h(App),
  });
  // console.log(instance)
}

export async function unmount() {
  console.log('vueapp2 unmount')
  instance.$destroy();
  instance = null;
}
