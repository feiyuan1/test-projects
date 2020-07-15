import axios from 'axios'

axios.default = {
  baseUrl: '',
  timeout: 4000,
}
export function request(config) {
  const instance = axios.create(config)
  instance.interceptors.request.use( config => {
    return config
  }).err( err => {
    console.log(err)
  })
  instance.interceptors.response.use( config => {
    return config
  }).err( err => {
    return err
  })
  return instance
}
