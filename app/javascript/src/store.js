import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false,
    userRole: '',
  },
  actions: {
    signedIn(state, [token, userId]){
      window.$cookies.set('jwt', token);
      window.$cookies.set('userId',userId);
      let self = this;
      this.$axios.get('/users/'+userId+'/courses').then(function(response){
        let userRole = response.data.some(x => x.role == "tutor") ? 'tutor': 'student';
        self.commit('signedIn',[token,userRole])
      });
    },
  },
  mutations: {
    signedIn(state, [token, userRole]){
      this.$axios.defaults.headers.common['Authorization'] = token;
      state.signedIn = true;
      state.userRole = userRole
    },
  }
});
