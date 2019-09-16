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
    el: '#vueRoot',
    router,
    render: h => h(App),
  });
  // console.log(instance)
}

export async function unmount() {
  console.log('vueapp unmount')
  instance.$destroy();
  instance = null;
}

/*new Vue({
  router,
  render: h => h(App)
}).$mount('#app')*/
/*instance = new Vue({
  el: '#vueRoot',
  router,
  render: h => h(App),
});*/
