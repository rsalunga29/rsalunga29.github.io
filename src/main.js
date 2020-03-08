import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import axios from 'axios'
import '@/assets/tailwind.css'

Vue.config.productionTip = false

Vue.prototype.$http = Vue.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
