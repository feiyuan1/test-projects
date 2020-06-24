const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bandle.js',
    publicPath:'./dist/'
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
      }
    ]
  }
}