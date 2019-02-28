// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueAxios, axios)
Vue.use(VueScrollactive)
Vue.config.productionTip = false

;(() => new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}))()
