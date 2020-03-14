import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/table'
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
      name: '自述文件',
      meta: { title: '自述文件' },
      children: [
        {
          path: '/table',
          component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
          name: '基础表格',
          meta: { title: '基础表格' }
        },
        {
          path: '/form',
          component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
          name: '基础表单',
          meta: { title: '基本表单' }
        },
        {
          // 权限页面
          path: '/permission',
          component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
          meta: { title: '权限测试', permission: true }
        },
        {
          path: '/403',
          component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
          meta: { title: '403' }
        },
        {
          path: '/tabs',
          component: () => import(/* webpackChunkName: "form" */'../components/page/Tabs.vue'),
          name: 'tab选项卡',
          meta: {title: 'tab选项卡'}
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "form" */'../components/page/Login.vue'),
      name: '登录',
      meta: {title: '登录'}
    }
  ]})
