import {fun2} from './const.js'
export default {
	add(state){
		state.count++
	},
	fun(state,payload){
		//mutation usually params
		state.count += 'paylaod'
	},
	fun1(state,payload){
		//mutation unusually params
		state.count += payload.num
	},
	[fun2](){
		//类型常量
		console.log('避免引用出错')
	},
	fun3(state){
			Vue.set(state,'name','james')			
	},
	fun4(state){
		Vue.delete(state,'name')
	}
}