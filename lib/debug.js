'use strict'

const debug = require('debug')

module.exports = {
  server: debug('paypal-server'),
  client: debug('paypal-client')
}
