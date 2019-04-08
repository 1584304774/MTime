import Vue from 'vue'
import Router from 'vue-router'
import home from "./home/";
import ticket from "./ticket";
import find from "./find";
import mall from "./mall";
import mine from "./mine";
Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  routes: [{
    path: '/home',
    component: () => import("@/views/home/index.vue")
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/ticket',
    component: () => import("@/views/ticket/index.vue")
  },
  {
    path: '/find',
    component: () => import("@/views/find/index.vue"),
  },
  {
    path: '/mall',
    component: () => import("@/views/mall/index.vue")
  },
  {
    path: '/mine',
    component: () => import("@/views/mine/index.vue")
  },
  // Find,
  {
    path: '*',
    redirect: '/home'
  },
  {
    path:"/detail",
    component:()=>import("@/views/mall/malldetail/index.vue")
  }

=======
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    ticket,
    find,
    mall,
    mine,
    {
      path:"**",
      redirect:"/home"
    }
>>>>>>> 8ed7e5e7495c7775b62940695139851f5b793efe
  ]
})
