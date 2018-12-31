import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from './containers/Login';


Vue.use(ElementUI);

new Vue({
  el: '#login',
  render: h => h(Login)
});