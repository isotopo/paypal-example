'use strict'

const config = require('../config')
const paypal = require('paypal-rest-sdk')
const Promeese = require('bluebird')

// Set paypal credentials
paypal.configure(config.paypal)

// Promisify payment methods
Promeese.promisifyAll(paypal.payment)

module.exports = paypal
