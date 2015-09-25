import bodyParser from 'koa-bodyparser'
import joi from 'joi'
import koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
import serve from 'koa-static'
import paypal from 'paypal-rest-sdk'
import validate from 'koa-joi'

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
  }
})

// Payment
router.get('/payment', function *() {
  yield this.render('payment')
})

router.post('/checkout', validate({
  body: {
    payment_concept: joi.string(),
    payment_amount: joi.number(),
    card_holder: joi.string().required(),
    card_number: joi.string().required(),
    card_date: joi.string(),
    card_ccv: joi.number()
  }
}), function *() {
  console.log(this.request.body)
  this.body = {
    status: 'yay'
  }
})

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(process.env.PORT || 3000)

export default server
