export default {
	state: {
		age: 21
	},
	getters: {
		jia(state){
			state.age ++
		}
	},
	mutations: {
		funMod1(state){
			console.log(state)
		}
	},
	actions: {}
}