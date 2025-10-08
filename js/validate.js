// Lyt efter klik på valider-knappen
document.getElementById('validate').addEventListener('click', event => {
    const form = event.target.form // Find formularen knappen tilhører
    let formIsValid = true // Holder styr på om hele formularen er udfyldt korrekt

    // Tjek om navn er udfyldt
    if (!form.fullname.value) {        
        formIsValid = false
        HandleError(form.fullname) // Vis fejlbesked
    }

    // Tjek om email er udfyldt
    if (!form.email.value) {        
        formIsValid = false
        HandleError(form.email) // Vis fejlbesked
    }    

    // Tjek om besked er udfyldt
    if (!form.message.value) {        
        formIsValid = false
        HandleError(form.message) // Vis fejlbesked
    }    

    // Hvis alt er udfyldt, vis dataene i en popup
    if (formIsValid) {
        const formData = `
            Navn: ${form.fullname.value}\n
            Email: ${form.email.value}\n
            Besked: ${form.message.value}\n
        `
        alert(formData) // Viser popup med brugerens info
    }
})

// Funktion der viser fejlbesked ved tomt felt
const HandleError = element => {
    // Tilføj rød ramme omkring feltet
    element.parentElement.classList.add('error')
    
    // Tjek om der ikke allerede er en fejlbesked
    if (!element.nextElementSibling) {
        // Opret en ny fejlbesked
        const errorMsg = document.createElement('span')
        errorMsg.classList.add('error-message')
        errorMsg.innerText = 'Du skal udfylde feltet'
        element.parentElement.append(errorMsg) // Tilføj beskeden til siden
    }

    // Fjern fejl når brugeren begynder at skrive
    element.addEventListener('input', () => {
        // Fjern fejlbeskeden hvis den findes
        if (element.nextElementSibling) {
            element.nextElementSibling.remove()
        }
        // Fjern rød ramme
        element.parentElement.classList.remove('error')
        formIsValid = true // Marker feltet som OK igen
    })
}