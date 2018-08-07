const webpack = require('webpack');
const express = require('express');
const opn = require('opn');

const app = express()
const port = 3000

const webpackDevMiddleware = requrie('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxyMiddleware = require('http-proxy-middleware')
const historyApiFallback = require('connect-history-api-fallback')

const config = require('./webpack.common.config.js')('development')
const compiler = webpack(config) 


const proxyTable = require('./proxy')

for (let context in proxyTable) {
  app.use(proxyMiddleware(context, proxyTable[context]))
}

app.use(historyApiFallback(require('./historyfallback')))

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.listen(port, () => {
  console.info('success', port);
  opn('http://localhost:' + port)
})