import Vue from 'vue'
import Router from 'vue-router'
import home from "./home/";
import ticket from "./ticket";
import find from "./find";
import mall from "./mall";
import mine from "./mine";
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
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/malldetail",
      component: () => import("@/views/mall/malldetail/index.vue")
    },
    {
      path:"/hotdetail",
      component:()=>import("@/views/home/hotdetail/index.vue")
    }

  ]
})
