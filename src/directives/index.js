import Vue from "vue";
import loading from './loading'
import lazy from './lazy'

Vue.directive('loading', loading);
Vue.directive('lazy', lazy);