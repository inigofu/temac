import Api from './api'

export default {
  getModel (token) {
    return new Promise((resolve, reject) => {
      Api().post('/rpc', {
        request: {
        },
        service: 'shippy.auth',
        method: 'Auth.GetAllRoles'
      },{
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
        }})
        .then(({ data }) => {
          resolve(data.roles)
        }).catch((error) => {
          reject(error)
        })
    })
  },
  saveModel (model, token) {
    return new Promise((resolve, reject) => {
      Api().post('/rpc', {
        request: model,
        service: 'shippy.auth',
        method: 'Auth.UpdateRole'
      }, {
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
        }})
        .then(({ data }) => {
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
    })
  },
  addModel (model, token) {
    return new Promise((resolve, reject) => {
      Api().post('/rpc', {
        request: model,
        service: 'shippy.auth',
        method: 'Auth.UpdateRole'
      }, {
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
        }})
        .then(({ data }) => {
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
    })
  },
  deleteModel (model, token) {
    return new Promise((resolve, reject) => {
      Api().post('/rpc', {
        request: model,
        service: 'shippy.auth',
        method: 'Auth.DeleteRole'
      }, {
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
        }})
        .then(({ data }) => {
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
    })
  }
}
