import JSONfn from "json-fn"
import Api from "./api"
import { validators } from "./validators.js"

function dataChek(key, value) {
  if (key === "validator") {
    if (value !== null) {
      return validators[value]
    } else {
      return validators.required
    }
  }
  return value
}

export default {
  getSchema(formid, token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: {
              id: formid
            },
            service: "temac.auth",
            method: "Auth.GetForm"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          let response = JSON.parse(JSONfn.stringify(data.form), dataChek)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getModel(token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: {},
            service: "temac.auth",
            method: "Auth.GetAllForms"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data.forms)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  saveModel(model, token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: model,
            service: "temac.auth",
            method: "Auth.UpdateForm"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  addModel(model, token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: model,
            service: "temac.auth",
            method: "Auth.UpdateForm"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteModel(model, token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: model,
            service: "temac.auth",
            method: "Auth.DeleteForm"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteField(model, token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: model,
            service: "temac.auth",
            method: "Auth.DeleteFields"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteTab(model, token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: model,
            service: "temac.auth",
            method: "Auth.DeleteTabs"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
