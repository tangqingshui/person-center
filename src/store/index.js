import Vue from 'vue'
import Vuex from 'vuex'

import loginUser from './loginUser';
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

Vue.use(Vuex)

export default new Vuex.Store({
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
    banner,
    setting,
    about,
    project
  },
  strict: true,
})
