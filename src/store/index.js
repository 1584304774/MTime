import Vue from 'vue'
import Vuex from 'vuex'
import Find from './find/index'
import Home from './home/index'
<<<<<<< HEAD
=======
import Mall from './mall/index'
>>>>>>> 900e3cfa192cf58c2b8b069a6a3498239b17529b

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Find,
<<<<<<< HEAD
    Home
=======
    Home,
    Mall,
    
>>>>>>> 900e3cfa192cf58c2b8b069a6a3498239b17529b
  }
})