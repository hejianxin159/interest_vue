import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('../views/index/Index');
const Login = () => import('../views/login/login');
const Register = () => import('../views/login/register');
// const

const routes = [
  {
    path: '/',
    name: 'DefaultIndex',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
        title: '注册'
    }
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    next();
    document.title = to.meta.title
});

export default router
