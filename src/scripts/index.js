// REMOVENDO REGISTROS DE VALORES
function removeRegisters(){
    const list = document.querySelector('.registers__list')
    list.innerHTML = ''
}

// VRIFICANDO LISTA VAZIA

function verificationList(){
    const registerList = document.querySelector('.registers__list')
    const sum = document.querySelector('.sum__content')
    const button = document.querySelector('.new__button')

    if(registerList.children.length === 0){
        sum.innerHTML = 'R$ 00.00'
        button.style.display = "flex"
    }
    else{
        button.style.display = "none"
    }
}

// CRIANDO CARDS

function createCard (arrayCategory, element) {

    const list = document.querySelector('.registers__list')
    const card = document.createElement('li')
    card.classList.add('list__item')
    card.id = element.id
    list.appendChild(card)

    const value = document.createElement('span')
    value.classList.add('item__value')
    value.innerText = `R$ ${element.value.toFixed(2)}`
    card.appendChild(value)

    const asideValue = document.createElement('div')
    asideValue.classList.add('item__aside')
    card.appendChild(asideValue)

    const category = document.createElement('span')
    category.classList.add('item__category')
    category.id = element.id
    category.innerText = arrayCategory[element.categoryID]
    asideValue.appendChild(category)

    const remove = document.createElement('img')
    remove.src = './src/assets/trash.svg'
    remove.classList.add('item__remove')
    asideValue.appendChild(remove)

    remove.addEventListener('click', () => {

        const listId = element.id
        console.log(listId)

        insertedValues.forEach((element, indice) => {
            console.log(element)
            if(element.id == listId){
                insertedValues.splice(indice, 1)
                card.remove()
                verificationList()
            } 
        })

    })

    const total = document.querySelector('.sum__content')
    const totalValue = insertedValues.reduce((accumulator, element) => accumulator + element.value, 0);
    total.innerHTML = `R$ ${totalValue.toFixed(2)}` 

}
renderArray(insertedValues)

// FILTRANDO POR TODOS

function filterAll(array) {
    const all = document.querySelector('.todos')
    all.addEventListener("click", () => {

        removeRegisters()

        array.forEach(element => createCard(valuesCategory, element))

        const totalValue = array.reduce((accumulator, element) => accumulator + element.value, 0);

        const total = document.querySelector('.sum__content')
        total.innerHTML = `R$ ${totalValue.toFixed(2)}` 

        verificationList()
    })
}
filterAll(insertedValues)

// FILTRANDO POR ENTRADAS

function filterInflows(array){
    const inflows = document.querySelector('.entradas')
    inflows.addEventListener('click', (event) => {

        removeRegisters()

        let filterIn = array.filter(element => {
            if(element.categoryID === 0){
                return {element}
            }
        })

        filterIn.forEach(element => createCard(valuesCategory, element))

        // removeValue(filterIn)
        // removeValue(insertedValues)

        const totalValue = filterIn.reduce((accumulator, element) => accumulator + element.value, 0);

        const total = document.querySelector('.sum__content')
        total.innerHTML = `R$ ${totalValue.toFixed(2)}`

        verificationList()
    })
}
filterInflows(insertedValues)




// FILTRANDO POR SAÍDAS




function filterOutflows(array){
    const outflows = document.querySelector('.saidas')
    outflows.addEventListener('click', (event) => {
        
        removeRegisters()
        
        let filterOut = array.filter(element => {
            if(element.categoryID === 1){
                return {element}
            }
        })
        filterOut.forEach(element => createCard(valuesCategory, element))
        
        const totalValue = filterOut.reduce((accumulator, element) => accumulator + element.value, 0);

        const total = document.querySelector('.sum__content')
        total.innerHTML = `R$ ${totalValue.toFixed(2)}`
        
        verificationList()
    })
}
filterOutflows(insertedValues)




// REMOVENDO REGISTRO DE VALOR ESPECÍFICO




// function removeValue(array){
//     const buttonsRemove = document.querySelectorAll('.item__remove')
//     console.log(buttonsRemove)

//     buttonsRemove.forEach(button => {
//         console.log(button)

//         button.addEventListener('click', (event) => {
//             console.log(button)

//             const listId = event.composedPath()[2].id
//             console.log(listId)

//             array.forEach((element, indice) => {
//                 console.log(element)
//                 if(element.id == listId){
//                     array.splice(indice, 1)
//                 } 
//             })
//             console.log(array)
            
//             renderArray(array)
//         })
//     })
// }

function renderArray(array){
    removeRegisters()
    array.forEach(element => createCard(valuesCategory, element))
    // removeValue(array)
}