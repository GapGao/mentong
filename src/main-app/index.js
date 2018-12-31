import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './containers/App';
import router from './router';

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  el: '#app',
});
