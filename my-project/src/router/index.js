import All from './../components/todo/all'
import HomeList from './../components/todo/home'
import Active from './../components/todo/active'
import Completed from './../components/todo/completed'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './../components/login'
import Home from '../views/home'
import ListProduct from '../components/admin/ListProduct'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
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
      path: '/list',
      name: 'Home',
      component: HomeList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list-product',
      name: 'ListProduct',
      component: ListProduct
    }
  ]
})
