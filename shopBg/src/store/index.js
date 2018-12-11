import Vue from 'vue'
import Vuex from 'vuex'
import headerTag from './modules/headerTag'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    headerTag
  }
})
