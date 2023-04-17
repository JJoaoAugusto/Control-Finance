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
    const inputInflows = document.querySelector('.category__inflows')
    const inputOutflows = document.querySelector('.category__outflows')
    const inputValue = document.querySelector('.modal__content-value')

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

        if(inputValue.value === ''){
            count++
        }
        else{
            newClient[inputValue.name] = Number(inputValue.value)
            inputValue.value = ''
        }

        const inputRadioVerification = () => {
            console.log(inputInflows.checked)
            if(inputInflows.checked){
                newClient[inputInflows.name] = Number(inputInflows.value)
                inputInflows.checked = false
            }
            else if(inputOutflows.checked){
                newClient[inputOutflows.name] = Number(inputOutflows.value)
                inputOutflows.checked = false
            }
            else{
                count++
            }
        }
        inputRadioVerification()

        if(count !== 0){
            count = 0
            return alert('Por favor preencha todos os campos to formulário')
        }
        insertedValues.push(newClient)
        newClient = {}

        removeRegisters()
        insertedValues.forEach(element => createCard(valuesCategory, element))
        modal.close()
    })
}
handleRegisterForm()