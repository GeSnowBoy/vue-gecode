var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',
  productionSourceMap: false,
  productionGzip: true,
  productionGzipExtensions: ['js', 'css'],
  output: {
    path: './build',
    publicPath: './',
    filename: 'bundle.js'
  },
  resolve:{
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015'
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
