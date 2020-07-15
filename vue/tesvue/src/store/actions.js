export default {
	asyfun(context,payload){
		return new Promise((res,rej) => {
			setTimeout(() => {
				context.commit('fun',payload)
				res()
			},1000)
		})
	}
}