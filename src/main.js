import Vue from 'vue';
import { registerMicroApps, runDefaultMountEffects, start } from 'qiankun';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
import Framework from './Framework.vue';
// import router from './router';
// import store from './store';

Vue.config.productionTip = false;

Vue.use(element);

let lastContent = null;
let app = null;

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
      // router,
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

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
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
        entry: '//localhost:8081',
        render,
        activeRule: genActiveRule('/vue'),
      },
      {
        name: 'vue app 2',
        // entry: { scripts: ['//localhost:8081/main.js'] },
        entry: '//localhost:8082',
        render,
        activeRule: genActiveRule('/vue2'),
      },
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
  runDefaultMountEffects('/vue1');

  start({
    prefetch: true,
    jsSandbox: true
  });
});

/*new Vue({
  el: '#main',
  router,
  render(h) {
    return h(Framework, {
      props: {

      },
    });
  },
});*/
