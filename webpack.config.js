const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
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
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'./src/index.html'
    })
  ]
}