/*Validation Email Adress*/

const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    var emailV = email.value.trim()
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailV === '')
    {
        errorFunc(email, 'Email cannot be empty')
    }
    else if(!emailV.match(pattern))
    {
        errorFunc(email, 'Please provide a valid email')
    }
});

function errorFunc(req, message){
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    const input = formControl.querySelector('input')
    span.innerText = message
    req.className += 'error'
    span.className += 'error-text'
    span.style.color = 'hsl(0, 100%, 40%)'
    input.style.border = '2px solid hsl(0, 100%, 40%)'

    if(req !== email)
    {
        req.value = ' '
    }
    else
    {
        req.style.color = "hsl(0, 100%, 74%)"
    }
}
