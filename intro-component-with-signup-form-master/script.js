const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    var fname = firstName.value.trim()
    var lname = lastName.value.trim()
    var emailV = email.value.trim()
    var passwordV = password.value.trim()
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(fname === '')
    {
        errorFunc(firstName, 'First Name cannot be empty')
    }
    else
    {
        successFunc(firstName)
    }

    if(lname === '')
    {
        errorFunc(lastName, 'Last Name cannot be empty')
    }
    else
    {
        successFunc(lastName)
    }

    if(passwordV === '')
    {
        errorFunc(password, 'Password cannot be empty')
    }
    else
    {
        successFunc(password)
    }

    if(emailV === '')
    {
        errorFunc(email, 'Email cannot be empty')
    }
    else if(!emailV.match(pattern))
    {
        errorFunc(email, 'Looks like not an email')
    }
    else
    {
        successFunc(email)
    }
});

function errorFunc(req, message){
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    req.className += 'error'
    span.className += 'error-text'

    if(req !== email)
    {
        req.value = ' '
    }
    else
    {
        req.style.color = "hsl(0, 100%, 74%)"
    }
}

function successFunc(req){
    req.className += 'success'
}


