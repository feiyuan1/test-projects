import axios from 'axios'

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    baseUrl: '',
    timeout: 4000,
  })
  instance.interceptors.request.use( config => {
    return config
  },err => {
    console.log(err)
  })
  instance.interceptors.response.use( config => {
    console.log(config)
    return config
  },err => {
    console.log(err)
  })
  return instance(config)
}
