import rc from 'rc'

let config = rc('paypal', {
  paypal: {
    mode: 'sandbox',
    client_id: '',
    client_secret: ''
  }
})

export default config
