import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import  VueAos from 'aos'
import 'aos/dist/aos.css'
Vue.config.productionTip = false
document.onselectstart = function () { return false; }
Vue.use(Antd)
Vue.use(VueAos)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
