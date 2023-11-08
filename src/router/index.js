//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import article from "@/views/Article/article.vue"
import Detail from "@/views/Article/Detail.vue"
import Login from "@/views/user/login.vue"
import Register from "@/views/user/register.vue"
import Index from "@/views/user/index.vue"

import { useUserStore } from '../stores/user';
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/Article/Detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Article/article/:id',
    name: 'article',
    component: article
  },
  { path: '/user/login', component: Login },
  { path: '/user/register', component: Register },
  { path: '/user/index', component: Index },

]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
}
);
//路由全局守卫

router.beforeEach((to, from, next) => {

  const userStore = useUserStore()

  const token = userStore.getUserInfo().token;

  if (to.path !== '/user/login' && token === '') {
    next({ path: '/user/login' });
  } else {
    next();
  }
})

//导出路由
export default router