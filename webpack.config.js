const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
/* 清理打包生成的文件夹 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    'index':'./src/index.js'
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename:'[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.less$/,
        use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'style-loader',
          options: {
            // insertInto: '#app',
            singleton: true,
            // transform: './css.transform.js'
          }
        }, {
          loader: 'css-loader',
          // loader:'file-loader'
          options: {
            minimize: true,
            modules: true,
            localIdentName: '[path][name]_[local]_[hash:base64:5]'
          }
        }, {
          loader: 'less-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'./src/index.html'
    }),
    new CleanWebpackPlugin('./dist/*.*'),
    /* 提取css代码 */
    new MiniCssExtractPlugin({
      filename:'[name].min.css'
    })
  ]
}