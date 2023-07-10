import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { showMessage } from "./utils";
import './directives'
import './mock';

store.dispatch("setting/fetchSetting");

// 引入全局css
import './styles/global.scss'

Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
