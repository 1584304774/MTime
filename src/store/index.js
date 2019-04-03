import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import find from './find/index'
=======
import Find from './find/index'
import Home from './home/index'
>>>>>>> chu

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    find
=======
    Find,
    Home
>>>>>>> chu
  }
})