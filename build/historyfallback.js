module.exports = {
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
  rewrites: [{
    from: /!\//,
    to: function (ctx) { 
    }
  }]
}