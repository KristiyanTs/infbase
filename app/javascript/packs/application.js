import Vue from 'vue/dist/vue.esm'
import App from '../src/App.vue'
import VueRouter from 'vue-router'
import router from "../src/router";
import Argon from "../src/plugins/argon-kit";
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Argon);
Vue.use(VueAxios, axios);
Vue.use(require('vue-cookies'));

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
})

