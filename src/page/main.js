import Vue from 'vue';
import App from './App';

Vue.prototype.$process = (global && global.process) || {};

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
