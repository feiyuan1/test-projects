import {ADD_TIMES,ADD_TO,CHANGE} from "./mutations_type";

export const mutations = {
  //在listItem中添加item
  [ADD_TIMES](state,prod){
    prod.times ++
  },
  [ADD_TO](state,prod){
    state.listItem.push(prod)
  },
  //修改listItem中的某个item的状态
  [CHANGE](state,[key,status]){
    state.listItem[key].seled = status;
  },
}
