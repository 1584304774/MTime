import Vue from 'vue'
import Router from 'vue-router'
// import Find from './find'


Vue.use(Router)

export default new Router({
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

  ]
})