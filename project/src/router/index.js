import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import home from '@/components/pages/home'
import news from '@/components/pages/news'
import login from '@/components/pages/login'
import register from '@/components/pages/register'
import Order from '@/components/pages/Order'
import Coupon from '@/components/pages/Coupon'
import users from '@/components/pages/users'

import {getName} from "@/util/auth";
import {test} from "@/configs";

Vue.use(Router)

const route = new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Coupon',
      name: 'Coupon',
      component: Coupon
    },
    {
      path: '/users',
      name: 'users',
      component: users
    }
  ]
})

const whiteList = ['/login', '/regist'];
route.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  }else{
    if(test){
      next();
    }else{
      if(getName() === ""){
        next({path: '/login'});
      }else{
        next();
      }
    }
  }
})

export default route

