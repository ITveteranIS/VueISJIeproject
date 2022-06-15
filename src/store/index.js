import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
  },
  mutations: {
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('token', user.Authorization);
    },
    usernames(state,user){
      state.username=user.username;
      localStorage.setItem('username', user.username);
    }
  },
  actions: {

  },
  modules: {

  }
})
