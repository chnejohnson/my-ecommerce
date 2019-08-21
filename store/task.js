import { apiGetUserTasks, apiCreateTask, apiDeleteTask } from './api'

export const state = () => ({
  buyList: []
})

export const getters = {
  buyList(state) {
    return state.buyList
  }
}

export const mutations = {
  CREATE_TASK(state, data) {
    console.log(data)
    state.buyList.push(data)
  },
  GET_USER_TASKS(state, data) {
    console.log(data)
    state.buyList = data
  },
  DELETE_TASK(state, data) {
    console.log(data)
    state.buyList.filter((e) => {
      return e._id !== data._id
    })
  }
}

export const actions = {
  async createTask({ commit }, task) {
    try {
      const res = await apiCreateTask(task)
      commit('CREATE_TASK', res.data)
    } catch (e) {
      throw new Error(e)
    }
  },
  async getUserTasks({ commit }) {
    try {
      const res = await apiGetUserTasks()
      commit('GET_USER_TASKS', res.data)
    } catch (e) {
      throw new Error(e)
    }
  },
  async deleteTask({ commit }, taskId) {
    try {
      const res = await apiDeleteTask(taskId)
      commit('DELETE_TASK', res.data)
    } catch (e) {
      throw new Error(e)
    }
  }
}
