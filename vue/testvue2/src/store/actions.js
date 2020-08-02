import {ADD_TIMES,ADD_TO,CHANGE} from "./mutations_type";

export const actions = {
  addItem(context,title){
    return new Promise((res,rej) => {
      let prod = null;
      context.state.listItem.forEach(item => {
        if(item.title == title){
          prod = item;
        }
      })
      //let prod = state.listItem.find(item => item.title == title)
      if(prod){
        context.commit(ADD_TIMES,prod)
        res('购物车+1')
      }else{
        context.commit(ADD_TO,{
          title: title,
          times: 1,
          seled: false,
        })
        res('加入购物车成功')
      }
    })
  },
}