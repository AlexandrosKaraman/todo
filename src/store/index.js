import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userId: null,
    users: []
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId
    },
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    fetchUsers({ commit }) {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          commit('SET_USERS', users)
        })
        .catch(error => console.error(error))
    }
  }
})

export default store
