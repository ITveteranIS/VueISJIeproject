import Vue from 'vue'
import VueRouter from 'vue-router'
import { message } from 'ant-design-vue';
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:"/login",
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/user/Indexs.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/register.vue')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('@/views/utils/as.vue')
  },
  {
    path: '*',
    redirect:"/page404",
  },
  {
    path: '/page404',
    name: 'page404',
    component: () => import('@/views/error/page404.vue')
  },
  {
    path: '/Contactus',
    name: 'Contactus',
    component: () => import('@/views/utils/Contactus.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register' || to.path === '/page404') {
     next();
  }else {
    const token= localStorage.getItem('token');
    if (token==null ||  token===''){
      message.error('未登录,请您重新登录')
      next('/login');
    }else {
      next();
    }
  }
})
export default router
