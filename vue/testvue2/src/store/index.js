import Vue from 'vue'
import Vuex from 'vuex'

import {mutations} from "./mutations";
import {actions} from "./actions";

Vue.use(Vuex)

const state = {
  //购物车中的list数据
  listItem: [],
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
