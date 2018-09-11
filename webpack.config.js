var HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(strPath) {
  return path.resolve(__dirname, strPath)
}
module.exports = {
  entry: './demo/index.js',
  devServer: {
    inline: true, //DevServer 会在构建完变化后的代码时通过代理客户端控制网页刷新。
    port: 3243,
    host: '0.0.0.0',
    open: 'http://localhost:' + 3243 + '/'
  },
  output: {
    path: resolve('./dist'),
    filename: 'vue-gecode.min.js'
  },
  resolve: {
    modules: [
      resolve('src'),
      resolve('static'),
      resolve('node_modules')
    ],
    extensions: ['.js', '.jsx', '.ts', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
   devtool:  'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },{
      test: /\.js$/,
      exclude: /node_modules/,
      include: resolve('src'),
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          'presets': [
            // 把es6转成es5
            ['env', {
              'modules': false
            }],
            'stage-0'
          ],
        }
      }]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}