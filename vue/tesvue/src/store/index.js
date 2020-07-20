import Vue from 'vue'
import Vuex from 'vuex'
import modules1 from './modules/modules1'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state = {
		count: 10,
	}
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		modules1,
	},
})


export default store