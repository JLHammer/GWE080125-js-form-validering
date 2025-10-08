document.getElementById('validate').addEventListener('click', event => {
    const form = event.target.form
    let formIsValid = true

    if (!form.fullname.value) {        
        formIsValid = false
        HandleError(form.fullname)
    }

    if (!form.email.value) {        
        formIsValid = false
        HandleError(form.email)
    }    

    if (!form.message.value) {        
        formIsValid = false
        HandleError(form.message)
    }    

    if (formIsValid) {
        const formData = `
            Navn: ${form.fullname.value}\n
            Email: ${form.email.value}\n
            Besked: ${form.message.value}\n
        `
        alert(formData)
    }
})

const HandleError = element => {
    element.parentElement.classList.add('error')
    if (!element.nextElementSibling) {
        const errorMsg = document.createElement('span')
        errorMsg.classList.add('error-message')
        errorMsg.innerText = 'Du skal udfylde feltet'
        element.parentElement.append(errorMsg)
    }

    element.addEventListener('input', () => {
        if (element.nextElementSibling) {
            element.nextElementSibling.remove()
        }
        element.parentElement.classList.remove('error')
        formIsValid = true
    })
}

