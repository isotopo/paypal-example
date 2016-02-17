'use strict'

const Router = require('koa-router')

let router = new Router()

// Home
router.get('/', function *() {
  yield this.render('home')
})

module.exports = router
