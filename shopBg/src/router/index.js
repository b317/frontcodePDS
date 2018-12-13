import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import ClientListManage from '@/views/Management/ClientListManage'
import CouponManage from '@/views/Management/CouponManage'
import GroupManage from '@/views/Management/GroupManage'
import OrderManage from '@/views/Management/OrderManage'
import ProductList from '@/views/Management/ProductList'
import ProductSort from '@/views/Management/ProductSort'
import GroupSendMes from '@/views/MesCenter/GroupSendMes'
import SystemMes from '@/views/MesCenter/SystemMes'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ClientListManage',
      name: 'ClientListManage',
      component: ClientListManage
    },
    {
      path: '/CouponManage',
      name: 'CouponManage',
      component: CouponManage
    },
    {
      path: '/GroupManage',
      name: 'GroupManage',
      component: GroupManage
    },
    {
      path: '/OrderManage',
      name: 'OrderManage',
      component: OrderManage
    },
    {
      path: '/ProductList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/ProductSort',
      name: 'ProductSort',
      component: ProductSort
    },
    {
      path: '/GroupSendMes',
      name: 'GroupSendMes',
      component: GroupSendMes
    },
    {
      path: '/SystemMes',
      name: 'SystemMes',
      component: SystemMes
    }
  ]
})