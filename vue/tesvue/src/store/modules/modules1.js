export default {
	state: {
		age: 21
	},
	getters: {
		jia(state){
			
			return ++ state.age
		}
	},
	mutations: {
		funMod1(state){
			console.log(state)
		}
	},
	actions: {}
}