// MOSTRANDO MODAL

function handleModal(){
    const body = document.querySelector('body')
    body.addEventListener('click', (event) => {
        if(event.target.classList.contains('register')){
            const modal = document.querySelector('dialog')
            modal.showModal()
        }
    })
}
handleModal()

// FECHANDO MODAL

function closeModal(){
    const modal = document.querySelector('dialog')
    modal.addEventListener('click', (event) => {
       if(event.target.classList.contains('modal__close')){
        modal.close()
       }
    })
}
closeModal()

// REGISTRANDO NOVO ELEMENTO

const handleRegisterForm = () => {
    const modal = document.querySelector('dialog')
    const inputs = document.querySelectorAll('input')
    const button = document.querySelector('.modal__submit')
    let newClient = {}
    let count = 0

    button.addEventListener('click', (event) => {
        event.preventDefault()
        
        insertedValues.filter(element => {
            let biggerId = 0
            if(element.id > biggerId){
                biggerId = element.id
                newClient.id = biggerId + 1
            }
        })

        inputs.forEach(input => {
            if(input.value === ''){
                count++
            }
            newClient[input.name] = Number(input.value)
        })

        if(count !== 0){
            count = 0
            return alert('Por favor preencha todos os campos to formulário')
        }

        insertedValues.push(newClient)
        newClient = {}

        inputs.forEach(input => {
            input.value = ''
        })

        removeRegisters()
        insertedValues.forEach(element => createCard(valuesCategory, element))
        modal.close()
    })
}
handleRegisterForm()