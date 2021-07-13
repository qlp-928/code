import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/home/index'

Vue.use(Router)

/*
  1.vue异步组件实现懒加载
    component：resolve=>(require(['需要加载的路由的地址'])，resolve)

  2.ES 提出的import方法，（------最常用------）
　　　　方法如下：const HelloWorld = （）=>import('需要加载的模块地址')
　　　　（不加 { } ，表示直接return）

  3.组件懒加载
    const One = ()=>import("./one");
      components:{
        "One-com":One
      },
     components:{
        "One-com":resolve=>(['./one'],resolve)
      },
*/

const HelloWorld = ()=>import("@/components/home/index")
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HelloWorld
    }
  ]
})
