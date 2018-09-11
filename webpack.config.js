var HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')

function resolve(strPath) {
  return path.resolve(__dirname, strPath)
}
console.log(process.env)
module.exports = {
  entry: './index.js',
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
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  externals: {
    Vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [{
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