import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'

import goodsTable from './views/goods/goodsTable.vue'
import userTable from './views/user/userTable.vue'
import setBanner from './views/banner/setBanner.vue'
import power from './views/power/power.vue'
import admin from './views/admin/admin.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        children: [
            { path: '/goodsTable', component: goodsTable, name: '商品分类' },
        ]
    },{
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        children: [
            { path: '/userTable', component: userTable, name: '用户管理' }
        ]
    },{
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        children: [
            { path: '/power', component: power, name: '权限设置' }
        ]
    },{
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        children: [
            { path: '/setBanner', component: setBanner, name: '广告管理' }
        ]
    },{
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        children: [
            { path: '/admin', component: admin, name: '管理员管理' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;