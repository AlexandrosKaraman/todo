import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userId: null,
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId
    },
  },
})

export default store
