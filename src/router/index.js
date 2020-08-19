import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import params from '@/components/params'
import Error from '@/components/Error'
import Count from '@/components/Count'
import test from '@/components/test'
import props from '@/components/props'


Vue.use(Router)

export default new Router({
  // 去掉路由的#/ hash 有#/
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias:'/home1'
    },
    // {
    //   path: '/hi',
    //   component: hi,
    //   //子页面路由
    //   children:[
    //     {path:'/',name: 'hi',component:hi},
    //     {path:'hi1',name: 'hi1',component:hi1},
    //     {path:'hi2',name: 'hi2',component:hi2}
    //   ]
    // },
    // url 传参
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:params,
      // beforeEnter:(to,form,next)=>{
      //   console.log(to)
      //   console.log(form)
      //   next()
      // }
    },
    //重定向
    {
      path:'/goHome',
      redirect:'/'
    },
    //重定向的时候传递参数
    {
      path:'/goparams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/hi',
      component: hi
    },
    //alias别名
    {
      path: '/hi',
      component: hi,
      alias:'/newHi'
    },
    // 404页面设置
    {
      path:'*',
      component:Error
   },
   {
    path:'/Count',
    component:Count
  },
  {
    path:'/test',
    component:test
  },
  {
    path:'/props',
    component:props
  }
  ]
})
