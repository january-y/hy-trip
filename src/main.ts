import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import lazyPlugin from 'vue3-lazy'

import App from './App.vue'
import router from './router'
import 'normalize.css'
import '@/assets/css/index.less'

const Mitt = mitt()
// TypeScript注册，必须注册ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    mitt: typeof Mitt
  }
}

const app = createApp(App)

app.config.globalProperties.mitt = Mitt
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin, {
  loading: './assets/img/lazy.png',
  error: './assets/img/error.png',
})

app.mount('#app')
