import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//mock
import './mock/index'
import axios from './utils/request.js'
import * as echarts from 'echarts'
const app = createApp(App)
//将echatrs相关组件变为全局变量
app.config.globalProperties.$echarts = echarts

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
app.config.globalProperties.$axios=axios;