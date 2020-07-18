import {request} from "./request";

export function getHomeData(){
  return request({
    url: 'http://localhost:3000/home',
  })
}
