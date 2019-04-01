import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:()=>import("@/views/home/index.vue")
    },
    {
      path:'/ticket',
      component:()=>import("@/views/ticket/index.vue")
    },
    {
      path:'/mall',
      component:()=>import("@/views/mall/index.vue")
    },
    {
      path:'/find',
      component:()=>import("@/views/find/index.vue")
    },
    {
      path:'/mine',
      component:()=>import("@/views/mine/index.vue")
    }
    
  ]
})
