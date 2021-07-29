import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/Read'
// import HelloWorld from '@/components/HelloWorld'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',//수정
      component: Read
    },
    {
      path:'/create',
      name:'/Create',
      component:Create
    }
  ]
})
