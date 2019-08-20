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
  LOGOUT(state) {
    console.log('logout')
    localStorage.removeItem('token')
    state.isLogin = false
    // if (state.user.profile) state.user.profile = null
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

  async login({ commit }, data) {
    try {
      const res = await apiLogin(data)
      commit('LOGIN', res.data)
    } catch (e) {
      throw new Error(e.message)
    }
  },

  async logout({ commit }) {
    try {
      await apiLogout()
      commit('LOGOUT')
    } catch (e) {
      throw new Error(e)
    }
  }
}
