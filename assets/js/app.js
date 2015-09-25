import $ from 'jquery'
import debug from '../../lib/debug'

localStorage.debug = 'paypal-*'

let form = $('form#payment')
let spinner = $('.spinner')
let successElement = $('.success')
let failedElement = $('.failed')

form.submit((e) => {
  e.preventDefault()

  let qs = form.serialize()
  debug.client('params sent', qs)

  form.addClass('loading')
  failedElement.hide()
  successElement.hide()
  spinner.show()

  $.post('/payments/checkout', qs)
  .done((response) => {
    debug.server('success response', response)

    successElement.html('Thank you for your payment: ' + response.id)
    successElement.show()
    failedElement.hide()
  })
  .fail((response) => {
    debug.server('fail response', response)

    failedElement.html(response.responseText)
    failedElement.show()
    successElement.hide()
  })
  .always(() => {
    form.removeClass('loading')
    spinner.hide()
  })
})
