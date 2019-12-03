import HelloWorld from './../components/HelloWorld'
import All from './../components/todo/all'
import Home from './../components/todo/home'
import Active from './../components/todo/active'
import Completed from './../components/todo/completed'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/active',
      name: 'Active',
      component: Active
    },
    {
      path: '/completed',
      name: 'Completed',
      component: Completed
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
