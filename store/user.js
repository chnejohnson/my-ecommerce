import { apiProfile, apiUploadAvatar } from './api'

export const state = () => ({
  avatar: 'http://placehold.it/100x100',
  profile: null
})

export const getters = {
  profile(state) {
    if (!state.profile) return 'not found'
    return state.profile
  }
}

export const mutations = {
  GET_PROFILE(state, data) {
    console.log(data)
    state.profile = data
  },
  UPLOAD_AVATAR(state, res) {
    console.log(res)
  }
}

export const actions = {
  async getProfile({ commit }) {
    try {
      const res = await apiProfile()
      commit('GET_PROFILE', res.data)
    } catch (e) {
      throw new Error(e)
    }
  },
  async uploadAvatar({ commit }, file) {
    try {
      const res = await apiUploadAvatar(file)
      commit('UPLOAD_AVATAR', res)
    } catch (e) {
      throw new Error(e)
    }
  }
}
