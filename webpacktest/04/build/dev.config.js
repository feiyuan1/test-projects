const merge = require('webpack-merge')
const baseConfig = require('base.config')
module.exports = merge(baseConfig,{
  devServer:{
    contentBase:'./dist/',
    inline:true,//是否实时更新
  }
})