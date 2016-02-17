'use strict'

const rc = require('rc')

let config = rc('paypal', {
  paypal: {
    mode: 'sandbox',
    client_id: '',
    client_secret: ''
  }
})

module.exports = config
