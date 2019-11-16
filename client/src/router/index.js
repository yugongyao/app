import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './home-routes'
import topicRoutes from './topic-routes'
import issueRoutes from './issue-routes'
import informRoutes from './inform-routes'
import mineRoutes from './mine-routes'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  homeRoutes,//首页
  topicRoutes,//话题
  issueRoutes,//发布
  informRoutes,//通知
  mineRoutes,//我的
  
  {
    // 用户详情
    path: '/userDetail',
    component: ()=>import('../pages/home/userDetail/UserDetail')
  },
  {
    // 动态详情
    path: '/dynamic',
    component: ()=>import('../pages/home/dynamic/Dynamic')
  },
  {
    // 登录
    path: '/login',
    component: ()=>import('../pages/mine/login/Login')
  },
  {
    // 注册
    path: '/regiester',
    component: ()=>import('../pages/mine/regiester/Regiester')
  },
  {
    path: '/404',
    component: ()=>import('../pages/common/not-find/NotFind')
  },
  {
    path: '**',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
