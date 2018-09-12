const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-ge-code.min.js',
    library: 'GeCode',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    //  {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   use: [{
    //     loader: 'babel-loader',
    //     options: {
    //       cacheDirectory: true,
    //       'presets': [
    //         // 把es6转成es5
    //         ['env', {
    //           'modules': false
    //         }],
    //         'stage-0'
    //       ],
    //     }
    //   }]
    // }
  ]

  },

  devtool: '#source-map',
  plugins:[
    new VueLoaderPlugin()
  ]
}

