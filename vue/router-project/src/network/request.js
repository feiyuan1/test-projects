import axios from 'axios'

export const instance1 = axios({
	url: 'http://httpbin.org'
})

export function request(config){
	const instance2 = axios.create({
		url: 'http://httpbin.org'
	})
	instance2.interceptors.request.use( config => {
		console.log(config)
		return config
	},err => {
		console.log(err)
	})
	instance2.interceptors.response.use( config => {
		console.log(config)
		return config
	},err => {
		console.log(err)
	})
	return instance2(config)
}

export const interceptor1 = axios.interceptors
