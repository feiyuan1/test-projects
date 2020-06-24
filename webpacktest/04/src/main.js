import {sum,mul} from './test1.js'
import Vue from 'vue'
require('./style.css')
require('./style1.less')
console.log(sum(10, 20));
console.log(mul(10, 20));
//step2
// const App = {
//   template:'<div>{{mes}}</div>',
//   data(){
//     return{
//       mes:'this is a vue test',
//     }
//   }
// }
//step3
// import App from './vue/step3'
//step4
// import App from './vue/App.vue'
//step5
import App from './vue/App'
//step6 plugin  BannerPlugin（横幅 开源） webpack自带  再webpack.config.js中引入webpack
//step7  HTMLWebpackPlugin@3.2.0 (版本过高会出错) 打包时将index.html文件放在dist中
//  1.组件没有引用 2.引用的bandle.js文件路径不对--》将publicPath去掉 、 按照04中的index.html文件来生成dist中的index.html
//step8 uglifyjsWebpackPlugin
// step9 测试环境下 自动更新脚本  安装webpack-dev-server，配置webpack.config.js中的devServer选项 以及package.json中脚本命令
//step10 一些配置在开发环境中需要 一些在生产环境下需要 一些两者都需要  --》将webpack.config.js文件中的配置进行抽离+合并  安装webpack-merge
//      在package.json中指定生产、开发路径
new Vue({
  el:'#app',
  //step1
  // template:'<div>{{mes}}</div>',
  // data:{
  //   mes:'this is a vue test',
  // }
  //step2  将魔板 数据分离出去 放在组件中
  //step3 将组件分离出去 放在一个单独的js文件中 并且将组件抛出  在本文件中引用
  //step4 将组件放在专门的vue文件中 并引用(由于无法编译vue文件 需要安装vue-loader以及vue-template-compiler 并配置
  // 由于vue-loader版本过高可能会出现问题（需要配置某些插件） 将版本降到13即可 再执行npm install重新安装模块)
  //step5  简写引入的文件后缀
  template:'<App />',
  components:{
    App,
  }
})