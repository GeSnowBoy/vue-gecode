module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
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
  }
}
