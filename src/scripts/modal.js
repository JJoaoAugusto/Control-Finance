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
    const button = document.querySelector('.modal__close')
    const modal = document.querySelector('dialog')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        modal.close()
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
    let newValue = {}
    let count = 0

    button.addEventListener('click', (event) => {
        event.preventDefault()
        
        insertedValues.filter(element => {
            let biggerId = 0
            if(element.id > biggerId){
                biggerId = element.id
                newValue.id = biggerId + 1
            }
        })

        if(inputValue.value === ''){
            count++
        }
        else{
            newValue.value = Number(inputValue.value)
            inputValue.value = ''
        }
            
        if(inputInflows.checked){
            newValue.categoryID = Number(inputInflows.value)
            inputInflows.checked = false
        }
        else if(inputOutflows.checked){
            newValue.categoryID = Number(inputOutflows.value)
            inputOutflows.checked = false
        }
        else{
            count++
        }

        if(count > 0){
            console.log(count)
            count = 0
            return alert('Por favor preencha todos os campos to formulário')
        }
        insertedValues.push(newValue)
        newValue = {}

        removeRegisters()
        
        insertedValues.forEach(element => createCard(valuesCategory, element))
       
        modal.close()

        verificationList(insertedValues)

    })
}
handleRegisterForm()