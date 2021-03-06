import { apiProfile, apiUploadAvatar, apiGetAvatar } from './api'

export const state = () => ({
  hasAvatar: false,
  profile: {
    name: '',
    email: '',
    createAt: '',
    updatedAt: ''
  }
})

export const getters = {
  profile(state) {
    if (!state.profile) return 'not found'
    return state.profile
  },
  avatar(state) {
    if (state.hasAvatar) {
      return process.env.NODE_ENV === 'production'
        ? `${process.env.taskManager}/users/${state.profile._id}/avatar`
        : `http://localhost:4000/users/${state.profile._id}/avatar`
    } else {
      return 'https://placehold.it/200x200'
    }
  }
}

export const mutations = {
  GET_PROFILE(state, data) {
    console.log('profile got')
    state.hasAvatar = false
    state.profile = { ...data }
  },
  UPLOAD_AVATAR() {
    console.log('avatar uploaded')
  },
  GET_AVATAR(state) {
    state.hasAvatar = true
  }
}

export const actions = {
  async getProfile({ commit }) {
    try {
      const res = await apiProfile()
      commit('GET_PROFILE', res.data)
    } catch (e) {
      throw new Error(e.message)
    }
  },
  async uploadAvatar({ commit }, file) {
    try {
      const res = await apiUploadAvatar(file)
      commit('UPLOAD_AVATAR', res)
    } catch (e) {
      throw new Error(e)
    }
  },
  async getAvatar({ commit }, userId) {
    try {
      await apiGetAvatar(userId)
      commit('GET_AVATAR')
    } catch (e) {
      console.log('avatar not found')
    }
  }
}
