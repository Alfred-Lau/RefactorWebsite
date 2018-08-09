var path = require('path')

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename:'js/[name]-bundle-[hash:5].js'
  },
  resolve: {
    alias: {
    }
  },
  module: {
    rules: [
      
    ]
  }
}