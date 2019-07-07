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
const { mentong, mentongSetting } = window.Mentong.data;

store.commit('updateMentong', { mentong, mentongSetting });

new Vue({
  render: h => h(App),
  router,
  store,
  el: '#app',
});
