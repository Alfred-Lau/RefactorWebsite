const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    'index':'./src/index.js'
  },
  output: {
    filename:'[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: 'node_modules'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}