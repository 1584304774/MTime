import Vue from 'vue'
import Vuex from 'vuex'
import Find from './find/index'

import Home from './home/index'
import Mall from './mall/index'

import Ticket from './ticket/index'


Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Find,
    Home,
    Mall,
    Ticket
  }
})