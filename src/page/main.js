import Vue from 'vue';
import App from './App';

Vue.prototype.$process = (global && global.process) || {};
Vue.prototype.$env = process.env.NODE_ENV || 'development';
Vue.prototype.$host = process.env.host || '';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
