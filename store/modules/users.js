import { services } from '../api'
import { clone } from 'lodash/clone'

const state = () => ({
  fields: ['id',
    'name',
    'email'],
  rows: Array,
  modelLoaded: false
})

const mutations = {
  setRows (state, rows) {
    state.rows = rows
  },
  setModelLoaded (state, loaded) {
    state.modelLoaded = loaded
  }
}
const actions = {
  getModel ({ commit, state, rootState }) {
    services.users.getModel(rootState.modules.user.token)
      .then((response) => {
        commit('setRows', response)
        commit('setModelLoaded', true)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  saveModel ({ commit, state, rootState }, model) {
    return new Promise((resolve, reject) => {
      services.users.saveModel(model, rootState.modules.user.token)
        .then((response) => {
          let tempRows = clone(state.rows)
          let temp = tempRows.filter(function (e) {
            return e.id === model.id
          })
          let index = tempRows.indexOf(temp[0])
          tempRows.splice(index, 1, response.form)
          commit('setRows', tempRows)
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  addModel ({ commit, state, rootState }, model) {
    return new Promise((resolve, reject) => {
      services.users.addModel(model, rootState.modules.user.token)
        .then((response) => {
          let tempRows = clone(state.rows)
          tempRows.push(response.form)
          commit('setRows', tempRows)
          resolve(response.form.id)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  deleteModel ({ commit, state, rootState }, model) {
    return new Promise((resolve, reject) => {
      services.users.deleteModel(model, rootState.modules.user.token)
        .then((response) => {
          let tempRows = clone(state.rows)
          let temp = tempRows.filter(function (e) {
            return e.id === model.id
          })
          let index = tempRows.indexOf(temp[0])
          tempRows.splice(index, 1)
          commit('setRows', tempRows)
          if (index !== 0) { index = index - 1 }
          resolve(index)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
