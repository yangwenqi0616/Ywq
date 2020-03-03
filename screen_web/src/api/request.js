import service from '@/utils/request'
const qs = require('qs')

export function get(url, params = {}) {
  url = url.replace(/(:\w+)/g, function($1) {
    const key = $1.slice(1)
    return params[key] || ''
  })
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
        paramsSerializer: function(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        }
      })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function post(url, data = {}) {
  url = url.replace(/(:\w+)/g, function($1) {
    const key = $1.slice(1)
    return data[key]
  })
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
