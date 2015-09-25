import Router from 'koa-router'
import joi from 'joi'
import debug from '../lib/debug'
import paypal from '../lib/paypal'
import util from 'util'
import validate from 'koa-joi'

let router = new Router({
  prefix: '/payments'
})

// Form to make a payment
router.get('/', function *() {
  yield this.render('payment')
})

// Checkout
router.post('/checkout', validate({
  body: {
    payment_concept: joi.string(),
    payment_amount: joi.number().required(),
    card_holder_firstname: joi.string().required(),
    card_holder_lastname: joi.string().required(),
    card_number: joi.string().required(),
    card_date: joi.date().format('YYYY-MM').required(),
    card_ccv: joi.number().required()
  }
}), function *() {
  debug.server(this.request.body, 'body params')

  let {
    card_holder_firstname,
    card_holder_lastname,
    card_number,
    card_date,
    card_ccv,
    payment_concept,
    payment_amount
  } = this.request.body

  // Set payment object
  let payment = {
    intent: 'sale',
    payer: {
      payment_method: 'credit_card',
      funding_instruments: []
    },
    transactions: []
  }

  // Format credit card info
  let type = (['amex', 'visa', 'mastercard', 'discover'])[parseInt(card_number.slice(0, 1), 10) - 3]
  let expire_year = card_date.split('-')[0]
  let expire_month = card_date.split('-')[1]

  // Add credit card to payment object
  payment.payer.funding_instruments.push({
    credit_card: {
      number: card_number,
      type: type,
      expire_month: expire_month,
      expire_year: expire_year,
      cvv2: card_ccv,
      first_name: card_holder_firstname,
      last_name: card_holder_lastname
    }
  })

  // Add transaction to payment object
  payment.transactions.push({
    amount: {
      total: payment_amount,
      currency: 'USD'
    },
    description: payment_concept
  })

  debug.server(util.inspect(payment, { showHidden: true, depth: null }), 'payment object')

  // Checkout
  this.body = yield paypal.payment.createAsync(payment, {})
})

export default router
