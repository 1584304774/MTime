import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'*',
      redirect:'/home'
    },
    {
      name:'home',
      path:'/home',
      component:()=>import("@/views/home/index.vue")
    },
    {
      name:'ticket',
      path:'/ticket',
      component:()=>import("@/views/ticket/index.vue")
    },
    {
      name:'mall',
      path:'/mall',
      component:()=>import("@/views/mall/index.vue"),
      children:[
        {
          name:'mallsearch',
          path:'search',
          component:()=>import("@/views/mall/mallsearch/index.vue")
        }
      ]
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
