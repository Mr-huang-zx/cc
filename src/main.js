import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { imgUrl } from './utils/baseUrl'
Vue.prototype.$imgUrl = imgUrl

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/assets/css/myglobal.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
