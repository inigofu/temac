import Api from "./api"

export default {
  getModel(token) {
    return new Promise((resolve, reject) => {
      Api()
        .post(
          "/rpc",
          {
            request: {},
            service: "temac.auth",
            method: "Auth.GetAllSchemas"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data.formschemas)
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
            method: "Auth.UpdateSchema"
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
            method: "Auth.CreateSchema"
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
            method: "Auth.DeleteSchema"
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
