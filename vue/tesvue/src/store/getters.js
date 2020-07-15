export default {
	pingf(state){
		return state.count * state.count
	},
	pingf1(state){
		return (params) => {
			return state.count + params
		}
	}
}