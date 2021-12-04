const forms =document.querySelectorAll ('form')
let formId

const sendForm = () =>{
    const form = document.getElementById(formId)

    console.log(form);
}



forms.forEach((form, id) => {
    form.addEventListener('submit',(event) =>{
        event.preventDefault()
        formId =`form${id+1}`
        sendForm(formId)
    })    
   
})

