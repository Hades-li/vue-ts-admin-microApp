/*
power by ignis
用于注册和运行子应用
 */
import {
  registerMicroApps,
  setDefaultMountApp,
  runAfterFirstMounted,
  start,
} from 'qiankun';
import {RegistrableApp, render} from "qiankun/dist/interfaces";
import router from '../../router'
import Vue from 'vue'

export interface AppMap {
  [key: string]: Vue | any
}

interface Props {
  [key: string]: any
}

export interface RegisterAppsData {
  name: string
  entry: string,
  activeRule: string
  props?: regProps
}

export interface RenderProps {
  appContent: string;
  loading: boolean;
}

interface regProps {
  isInFramework: boolean,
  appCallback?: (appInstance: Vue | any) => void

  [key: string]: any
}

/***
 *
 * @param routerPrefix： 传入的用于判断子应用的路由
 * @param mode： 模式，子应用是hash模式还是history模式
 */
function genActiveRule(routerPrefix: string, mode: string = 'hash'): (location: Location) => boolean {
  return (location: Location) => {
    if (mode === 'hash') {
      return location.hash.startsWith(routerPrefix)
    } else {
      return location.pathname.startsWith(routerPrefix);
    }
  }
}

// 用于自动判断当前路径是否是dev几或pre，如果是，把dev几或pre放在path的前面,并输出//dev.xxx.xxx.com
function buildEntry(path: string): string {
  const host = location.host
  const hostPrefix = host.split('.')[0] // host前缀
  if (host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
    return `//${path}`
  } else if (hostPrefix.startsWith('dev') || hostPrefix.startsWith('pre')) {
    return `//${hostPrefix}.${path}`
  } else {
    return `//${path}`
  }
}

// const test = buildEntry('pro.s-gsun.com')
// console.log('test->', test)

export class RegApp {
  public appMap: AppMap = {}
  public curAppInstance?: Vue | any
  // 子应用的注册信息
  public registerAppsData: RegisterAppsData[] = [
    {
      name: 'exchange',
      // entry: {html: '', style： scripts: ['//localhost:8081/app.js'] },
      entry: process.env.NODE_ENV === 'development' ? '//localhost:5001' : buildEntry('rec.s-gsun.com'),
      activeRule: '#/exchange',
    },
    {
      name: 'projectdb',
      // entry: { scripts: ['//localhost:8081/main.js'] },
      entry: process.env.NODE_ENV === 'development' ? '//localhost:5002' : buildEntry('pro.s-gsun.com'),
      activeRule: '#/project',
    },
    /*  {
        name: 'home',
        // entry: { scripts: ['//localhost:8081/main.js'] },
        entry: '//localhost:8081',
        activeRule: '#/vue1',
      },*/
  ]

  public lastContent: string = ''
  public isStart: boolean = false
  public renderCallback!: (html: string) => void
  public afterMountCallback!: (instance: Vue) => void

  // 构造函数
  constructor() {
    this.regApps(this.registerAppsData)
    // setDefaultMountApp(this.registerAppsData[0].activeRule)
    runAfterFirstMounted(this.firstMounted)
  }

  /***
   *
   * @param appContent 子app读取过来的html内容
   * @param loading 读取进度条，读取中返回true，读取完毕返回false
   */
  private render({appContent, loading}: RenderProps): void {
    if (this.lastContent !== appContent) {
      this.lastContent = appContent
      if (this.renderApp) {
        this.renderCallback(this.lastContent)
      }
    }
  }

  public renderAfterMount(callback: (app: Vue) => void) {
    this.afterMountCallback = callback
  }

  public renderApp(callback: (html: string) => any) {
    this.renderCallback = callback
  }

  // 回调函数
  public firstMounted() {
    console.log('首次挂载完成')
  }

  //回调函数
  public beforeLoad(app: Props): Promise<void> {
    console.log('before load', app);
    return Promise.resolve();
  }

  //回调函数
  private beforeMount(app: Props): Promise<void> {
    console.log('before mount', app);
    return Promise.resolve();
  }

  private afterMount = (app: Props): Promise<void> => {
    console.log(`${app.name} afterMount:`, app);
    if (this.appMap[app.name]) {
      this.curAppInstance = this.appMap[app.name]
    }
    console.log('当前appMap->', this.appMap)
    console.log('当前实例对象->', this.curAppInstance)
    this.afterMountCallback(this.curAppInstance)
    return Promise.resolve()
  }

  // 回调函数
  private afterUnmount(app: Props): Promise<void> {
    console.log('before afterUnmount', app);
    return Promise.resolve();
  }

  // 注册子APP
  public regApps(regData: RegisterAppsData[]) {
    const apps = regData.map(item => {
      const app: RegistrableApp<Props> = {
        name: item.name,
        entry: item.entry,
        render: this.render.bind(this),
        activeRule: genActiveRule(item.activeRule),
        props: {
          isInFramework: true,
          appCallback: (appInstance: Vue) => {
            this.appMap[item.name] = appInstance
          }
        }
      };
      return app
    });
    registerMicroApps(apps, {
      beforeLoad: this.beforeLoad,
      afterMount: this.afterMount,
      beforeMount: this.beforeMount,
      afterUnmount: this.afterUnmount
    });
    runAfterFirstMounted(() => {
      this.firstMounted()
    })
  }

  // 开始挂载-一次执行
  public startApp() {
    if (!this.isStart) {
      console.log('regApp->开始')
      start({jsSandbox: false})
      this.isStart = true
    }
  }

  // 获取加载进来的Vue实列
  public getAppVueInstance(appName: string) {
    return this.appMap[appName].instance
  }
}

const regApp = new RegApp()

export default regApp
