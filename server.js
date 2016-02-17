'use strict'

const bodyParser = require('koa-bodyparser')
const debug = require('./lib/debug')
const koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const serve = require('koa-static')

let server = koa()
let router = new Router()

server.use(bodyParser())

// Views
server.use(views('views', { default: 'swig' }))

// Static files
server.use(serve(__dirname + '/public'))

// Logger
server.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// Error handler
server.use(function *(next) {
  try {
    yield next
  } catch (err) {
    this.status = err.status || 500
    this.body = err.message
    this.app.emit('error', err, this)

    debug.server(err)
  }
})

server
  .use(require('./controllers/main').routes())
  .use(require('./controllers/payments').routes())
  .use(router.allowedMethods())

server.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening at ${process.env.PORT || 3000}`)
})

module.exports = server
