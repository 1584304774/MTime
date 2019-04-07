import Vue from 'vue'
import Vuex from 'vuex'
import Find from './find/index'
<<<<<<< HEAD
import Home from './home/index'
import Mall from './mall/index'
=======
import Ticket from './ticket/index'
>>>>>>> origin/xiao

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Find,
<<<<<<< HEAD
    Home,
    Mall,
=======
    Ticket
>>>>>>> origin/xiao
  }
})