const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bandle.js',
    // publicPath:''
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责加载css文件  style-loader 负责将样式添加到dom元素上
        //从右向左读取
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test:/\.vue$/,
        use:{
          loader:'vue-loader'
        },
      }
    ]
  },
  resolve:{
    alias:{
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions:['.js','.css','.vue','.json']
  },
  plugins:[
      new webpack.BannerPlugin('最终版权归**所有'),
      new HtmlWebpackPlugin({
        template:'./index.html',
      }),
      new UglifyjsWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist/',
    inline:true,//是否实时更新
  }
}