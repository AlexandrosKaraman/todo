import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: {
      text: null,
      type: 'error'
    },
    loadStatus: false,
    userId: 1,
    users: []
  },
  getters: {
    // Get message
    message: ({ message }) => message,
    // Get load status
    loadStatus: ({ loadStatus }) => loadStatus,
    // Get user id
    getUserId: ({ userId }) => userId
  },
  mutations: {
    /**
     * Set user id
     * @param state
     * @param userId {Number}
     */
    SET_USER_ID(state, userId) {
      state.userId = Number(userId)
    },
    SET_LOAD_STATUS(state, value) {
      state.loadStatus = value
    },
    SET_MESSAGE_TEXT(state, text) {
      state.message.text = text
    },
    SET_MESSAGE_TYPE(state, type) {
      state.message.type = type
    },
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    /**
     * Toggle load status by mutation
     */
    toggleLoadStatus({ state, commit }) {
      commit('SET_LOAD_STATUS', !state.loadStatus)
    },
    /**
     * Fetch users from server
     * @param commit
     * @param dispatch
     * @return {Promise<unknown>}
     */
    fetchUsers({ commit, dispatch }) {
      dispatch('toggleLoadStatus')

      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
          commit('SET_USERS', users)
        })
        .catch((error) => {
          commit('SET_MESSAGE_TEXT', error)
          commit('SET_MESSAGE_TYPE', 'error')
        })
        .finally(() => {
          dispatch('toggleLoadStatus')
        })
    }
  }
})

export default store
