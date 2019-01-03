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
            method: "Auth.GetAllUsersRole"
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }
        )
        .then(({ data }) => {
          resolve(data.users)
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
            method: "Auth.UpdateUser"
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
            method: "Auth.Create"
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
            method: "Auth.DeleteUser"
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
