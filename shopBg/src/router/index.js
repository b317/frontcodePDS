import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import ClientListManage from '@/views/Management/ClientListManage'
import CouponManage from '@/views/Management/CouponManage'
import GroupManage from '@/views/Management/GroupManage'
import OrderManage from '@/views/Management/OrderManage'
import ProductManage from '@/views/Management/ProductManage'
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
      path: '/ProductManage',
      name: 'ProductManage',
      component: ProductManage
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
