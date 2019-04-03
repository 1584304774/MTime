import Vue from 'vue'
import Vuex from 'vuex'
import Find from './find/index'
import Home from './home/index'
<<<<<<< HEAD
=======
import Mall from './mall/index'
>>>>>>> dev

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Find,
<<<<<<< HEAD
    Home
=======
    Home,
    Mall,
    
>>>>>>> dev
  }
})