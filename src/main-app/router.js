import Vue from 'vue';
import VueRouter from 'vue-router';
import Mentong from './containers/Mentong';
import Profile from './containers/Profile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/mentong',
    name: 'mentong',
    component: Mentong,
    meta: { title: '门童' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { title: '账号信息' }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '奇秀直播助理';
  next();
});

export default router;
