const emailElement = document.getElementById('email')
const errorElement = document.getElementById('error')
const formElement = document.getElementById('form')
const messageElement = document.getElementById('message')

formElement.addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  const email = emailElement.value

  if (email.length === 0 || !email.includes('@')) {
    errorElement.classList.add('show')
    messageElement.classList.add('show')
    formElement.classList.add('error')
    return
  }

  errorElement.classList.remove('show')
  messageElement.classList.remove('show')
  formElement.classList.remove('error')
}
