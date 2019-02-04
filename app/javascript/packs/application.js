import Vue from 'vue/dist/vue.min.js'
import App from '../src/App.vue'
import VueRouter from 'vue-router'
import router from "../src/router";
import Argon from "../src/plugins/argon-kit";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({ faCaretLeft, faCaretRight });
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Argon);

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
})

