import './assets/style/main.scss'
import Vue from 'vue'
import App from './App.vue'
import Timer from './components/Timer.vue';
import AddNewTimer from './components/AddNewTimer.vue';
import moment from 'moment';

Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Timer,
  AddNewTimer
}).$mount('#app')
