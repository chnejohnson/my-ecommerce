import { apiLogin, apiSignup, apiLogout } from './api'

export const state = () => ({
  isLogin: false
})

export const getters = {}

export const mutations = {
  CREATE_ACCOUNT(state, data) {
    console.log(data)
    localStorage.token = data.token
    state.isLogin = true
  },
  LOGIN(state, data) {
    console.log(data)
    localStorage.token = data.token
    state.isLogin = true
  },
  LOGOUT(state, res) {
    console.log(res)
    localStorage.removeItem('token')
    state.isLogin = false
  },
  CHANGE_ISLOGIN(state) {
    state.isLogin = true
  }
}

export const actions = {
  async createAccount({ commit }, data) {
    try {
      const res = await apiSignup(data)
      commit('CREATE_ACCOUNT', res.data)
    } catch (e) {
      throw new Error(e.message)
    }
  },

  async login({ commit, state }, data) {
    try {
      const res = await apiLogin(data)
      commit('LOGIN', res.data)
    } catch (e) {
      throw new Error(e.message)
    }
  },

  async logout({ commit, state }) {
    const res = await apiLogout()
    commit('LOGOUT', res)
  }
}
