import Vue from 'vue'
import Vuex from 'vuex'

import loginUser from './loginUser';

Vue.use(Vuex)

export default new Vuex.Store({
  name: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginUser,
  }
})
