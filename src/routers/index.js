import Vue from 'vue'
import Router from 'vue-router'
import home from "./home/";
import ticket from "./ticket";
import find from "./find";
import mall from "./mall";
import mine from "./mine";
import hot from "./hot";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    home,
    ticket,
    find,
    mall,
    mine,
    hot,
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/malldetail",
      component: () => import("@/views/mall/malldetail/index.vue")
    }

  ]
})
