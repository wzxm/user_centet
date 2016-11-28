import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = resolve => require(['./components/home'], resolve)
const Festival = resolve => require(['./components/festival'], resolve)
const Birthday = resolve => require(['./components/birthday'], resolve)

/**
 * 使用vue-router
 */
Vue.use(VueRouter)

/**
 * [VueRouter 创建一个路由器实例, 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置]
 */
const routes = [
  { path: '/home', component: Home },
  { path: '/festival', component: Festival },
  // { path: '/home/:id', component: Home, children: [{ path: '/button', component: Button }] },
  { path: '/birthday', component: Birthday }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  next()
})

router.afterEach(route => {
  // ...
})

// 最后面加上一个回车，代表语句结束，否则会报错
export default router
