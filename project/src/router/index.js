import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import home from '@/components/pages/home'
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

