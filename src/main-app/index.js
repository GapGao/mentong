import Vue from 'vue';
import moment from 'moment';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import App from './containers/App';

Vue.use(ElementUI);

//自定义插件
Vue.filter('dateFormat', function (value, formatStr = 'YYYY-MM-DD') {
  return value && moment(value).format(formatStr);
});

Vue.mixin({
  methods: {
    onShowWx () {
      const h = this.$createElement;
      this.$msgbox({
        title: '管理员微信二维码',
        message: h('div', null, [
          h('img', {
            attrs: {
              src: '/images/wexin.jpg',
            },
            class: 'wexin',
          }),
        ]),
        distinguishCancelAndClose: true,
        lockScroll: true,
        showConfirmButton: false,
        center: true,
      });
    },
  },
});

const { user, mentong, mentongSetting } = window.Mentong.data;
store.commit('updateUser', { user });
store.commit('updateMentong', { mentong, mentongSetting });

new Vue({
  render: h => h(App),
  router,
  store,
  el: '#app',
});
