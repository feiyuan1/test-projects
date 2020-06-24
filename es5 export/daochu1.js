var module1 = (function () {
  var flag = false;
  if(flag){
    console.log('flag is false')
  }
  var sum = function(){
    console.log('suming..')
  }
//  抛出数据 并设置变量接收
  return sum
})()