// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VDistpicker from 'v-distpicker'

Vue.config.productionTip = false;

let bus = new Vue();
Vue.prototype.$bus= bus;
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(infiniteScroll);

Vue.component('v-distpicker', VDistpicker);

new Vue({
  store,
  el: '#app',
  router,
  render:r=>r(App)
  // components: { App },
  // template: '<App/>'
})
