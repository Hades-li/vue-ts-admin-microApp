import Vue from 'vue/types/vue'
import QiankunVue from '@/plugins/qiankun-vue/index'
import { RegistrableApp } from 'qiankun'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    qiankunVue?: QiankunVue;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $qiankunVue: QiankunVue;
    $renderSuccess: (callback: (appHtml: string) => void) => void
    $afterMounted: (callback: (app: RegistrableApp) => void) => void
  }
}
