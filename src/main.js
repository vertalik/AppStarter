import './assets/style/style.scss'
import Vue from 'vue'
import App from './App.vue'
import moment from 'moment';
import '@mdi/font/css/materialdesignicons.css'

Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
