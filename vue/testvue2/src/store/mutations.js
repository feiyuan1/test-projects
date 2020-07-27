export const mutations = {
  //在listItem中添加item
  addItem(state,title){
    let flag = true;
    //对 title判断
    if(state.listItem.length){
      state.listItem.forEach((item) => {
        if(item.title == title){
          item.times++;
          flag = false;
        }
      })
    }
    if(flag){
      state.listItem.push({
        title: title,
        times: 1,
        seled: false,
      })
    }
  },
  //修改listItem中的某个item的状态
  change(state,[key,status]){
    state.listItem[key].seled = status;
  },
}
