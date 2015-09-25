import config from '../config'
import paypal from 'paypal-rest-sdk'
import Promeese from 'bluebird'

// Set paypal credentials
paypal.configure(config.paypal)

// Promisify payment methods
Promeese.promisifyAll(paypal.payment)

export default paypal
