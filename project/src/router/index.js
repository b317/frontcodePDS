import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/pages/home/home';
import news from '@/components/pages/news';
import login from '@/components/pages/login';
import register from '@/components/pages/register';
import Order from '@/components/pages/order/Order';
import Coupon from '@/components/pages/coupon/Coupon';
import goods from '@/components/pages/goods/goods';
import GoodsItem from '@/components/pages/goods/GoodsItem';
import GoodsRecommendItem from '@/components/pages/GoodsRecommendItem';
import users from '@/components/pages/users/users';
import setAddress from '@/components/pages/users/setAddress';
import setPass from '@/components/pages/users/setPass';
import setUserInfo from '@/components/pages/users/setUserInfo';
import userInfo from '@/components/pages/users/userInfo';

import NewsOne from '@/components/pages/NewsOne';
import NewsTwo from '@/components/pages/NewsTwo';
import NewsThree from '@/components/pages/NewsThree';

import ProductDetail from '@/components/pages/ProductDetail';
import GoodsDetail from '@/components/pages/GoodsDetail';

import {getId} from "@/util/auth";
import MerchantEntry from  "@/components/pages/MerchantEntry";
import seach from '@/components/pages/seach/seach';
import BuyNow from '@/components/pages/BuyNow';
import shop from '@/components/pages/shop/shop';

Vue.use(Router);

const route = new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/GoodsItem',
      name: 'GoodsItem',
      component: GoodsItem
    },
    {
      path: '/GoodsRecommendItem',
      name: 'GoodsRecommendItem',
      compontent: GoodsRecommendItem
    },
    {
      path: '/ProductDetail',
      name : 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/GoodsDetail',
      name : 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/BuyNow',
      name : 'BuyNow',
      component: BuyNow
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/seach/:sval',
      name: 'seach',
      component: seach
    },
    {
      path: '/shop/:sid',
      name: 'shop',
      component: shop
    },
    {
      path: '/news',
      name: 'news',
      component:news,
      children:[
        {
          path:'/',
          name:'newsOne',
          component:NewsOne
        },
        {
          path:'/newsOne',
          name:'newsOne',
          component:NewsOne
        },
        {
          path:'/newsTwo',
          name:'newsTwo',
          component:NewsTwo
        },
        {
          path:'/newsThree',
          name:'newsThree',
          component:NewsThree
        },
      ]
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
      path:'/MerchantEntry',
      name:'MerchantEntry',
      component:MerchantEntry
    },
    {
      path: '/users',
      name: 'users',
      component: users,
      children:[
        {
          path:'/userInfo',
          name:'userInfo',
          component:userInfo
        },
        {
          path:'/setUserInfo',
          name:'setUserInfo',
          component:setUserInfo
        },
        {
          path:'/setPass',
          name:'setPass',
          component:setPass
        },
        {
          path:'/setAddress',
          name:'setAddress',
          component:setAddress
        },
      ]
    }
  ]
})
let test = false;
const whiteList = ['/login', '/register','/home'];
route.beforeEach((to, from, next) => {
  scrollTo(0,0);
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  }else{
    if(test){
      next();
    }else{
      if(getId() == null){
        next({path: '/login'});
      }else{
        next();
      }
    }
  }
})

export default route

