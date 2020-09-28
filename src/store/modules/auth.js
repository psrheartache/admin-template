import { api } from '@api'
const state = {
  userInfo: '',
}
const mutations = {
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}

const actions = {
  // user login
  login({ commit, dispatch }, userInfo) {
    commit('SET_USER_INFO', userInfo)
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
