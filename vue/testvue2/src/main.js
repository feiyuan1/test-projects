import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from "view-design";
import 'view-design/dist/styles/iview.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import fastClick from 'fastclick'
import toast from '@com/toast'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(iView)
Vue.use(Vant)
//安装插件
Vue.use(toast)
Vue.use(VueLazyload,{
//  传入的某些选项
  loading: require('./assets/img/favicon.png'),
})

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
