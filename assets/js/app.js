import $ from 'jquery'

let form = $('form#payment')
let spinner = $('.spinner')
let successElement = $('.success')
let failedElement = $('.failed')

form.submit((e) => {
  e.preventDefault()

  form.addClass('loading')
  failedElement.hide()
  successElement.hide()
  spinner.show()

  $.post('/checkout', form.serialize())
  .done((a, b, c) => {
    console.log(a, b, c)
    successElement.show()
    failedElement.hide()
  })
  .fail((response) => {
    failedElement.html(response.responseText)
    failedElement.show()
    successElement.hide()
  })
  .always(() => {
    form.removeClass('loading')
    spinner.hide()
  })
})
