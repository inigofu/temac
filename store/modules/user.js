import { services } from "../api"
import Api from "../api/services/api"
import { setToken, unsetToken } from "~/utils/auth"

const state = () => ({
  user: null,
  token: null,
  nav: [],
  rules: null
})

const mutations = {
  setuser(state, user) {
    state.user = user
  },
  settoken(state, token) {
    state.token = token
  },
  removetoken(state) {
    state.token = null
  },
  setnav(state, nav) {
    state.nav = nav
  },
  setrules(state, rules) {
    state.rules = rules
  }
}
const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  loggedUser(state) {
    return state.user
  }
}
const actions = {
  login({ commit, state }, credentials) {
    console.log("login credential " + credentials)
    return new Promise((resolve, reject) => {
      services.user
        .login(credentials)
        .then(data => {
          console.log("login data " + data)
          var token = data.token.token
          commit("settoken", token)
          commit("setuser", data.user)
          commit("setnav", data.menues)
          commit("setrules", data.rules)
          // Save to local storage as well
          setToken(token)
          Api().defaults.headers.common["Authorization"] = token
            ? `Bearer ${token}`
            : ""
          resolve()
        })
        .catch(error => {
          console.log("login error " + error)
          reject(error)
        })
    })
  },
  validateToken({ commit, state }, token) {
    return new Promise((resolve, reject) => {
      services.user
        .validateToken(token)
        .then(data => {
          if (data.token.valid) {
            Api().defaults.headers.common["Authorization"] = token
              ? `Bearer ${token}`
              : ""
            commit("settoken", token)
            commit("setuser", data.user)
            commit("setnav", data.menues)
            commit("setrules", data.rules)
          } else {
            unsetToken()
          }
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logout({ commit, state }) {
    commit("settoken", null)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
