import {request} from "./request";

export function getHomeData(){
  return request({
    url: 'http://localhost:3000/home',
  })
}

export function getGoodsData(type,page){
  return request({
    url:'http://localhost:3000/home/goods',
    params:{
      type,
      page
    }
  })
}
