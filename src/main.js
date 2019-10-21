import Vue from 'vue';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
import Framework from './Framework.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

Vue.use(element);

let lastContent = null;
let app = null;

function genActiveRule(routerPrefix, mode = 'hash') {
  return (location) => {
    if (mode === 'hash') {
      return location.hash.startsWith(routerPrefix);
    } else {
      return location.pathname.startsWith(routerPrefix);
    }
  };
}

function render({ appContent, loading }) {
  console.log(appContent);
  if (lastContent === appContent) {
    return;
  }
  lastContent = appContent;
  // document.querySelector('#main').innerHTML = appContent;

  if (!app) {
    app = new Vue({
      el: '#main',
      router,
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

let microInstance = false;
window.addEventListener('load', () => {
  if (microInstance) {
    return;
  }
  console.log('事件加载了');
  microInstance = true;
  registerMicroApps(
    [
      {
        name: 'vue app',
        // entry: { scripts: ['//localhost:8081/main.js'] },
        entry: process.env.NODE_ENV === 'development' ? '//localhost:9001' : '//localhost:9101',
        render,
        activeRule: genActiveRule('#/vue1'),
      },
      {
        name: 'vue app 2',
        // entry: { scripts: ['//localhost:8081/main.js'] },
        entry: process.env.NODE_ENV === 'development' ? '//localhost:9002' : '//localhost:9102',
        render,
        activeRule: genActiveRule('#/vue2'),
      }
    ],
    {
      beforeLoad: [app => {
        console.log('before load', app);
      }],
      beforeMount: [app => {
        console.log('before mount', app);
      }],
      afterUnmount: [app => {
        console.log('after unload', app);
      }],
    },
  );
  // start({jsSandbox: false});
  start()
});
