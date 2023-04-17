// REMOVENDO REGISTROS DE VALORES
function removeRegisters(){
    const list = document.querySelector('.registers__list')
    list.innerHTML = ''
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

    const total = document.querySelector('.sum__content')
    const totalValue = insertedValues.reduce((accumulator, element) => accumulator + element.value, 0);
    total.innerHTML = `R$ ${totalValue.toFixed(2)}` 

}
insertedValues.forEach(element => createCard(valuesCategory, element)) 

// FILTRANDO POR TODOS

function filterAll(array) {
    const main = document.querySelector('.main')
    main.addEventListener("click", (event) => {
        if(event.target.classList.contains('todos')){
            removeRegisters()
            array.forEach(element => createCard(valuesCategory, element))
            const totalValue = array.reduce((accumulator, element) => accumulator + element.value, 0);
            const total = document.querySelector('.sum__content')
            total.innerHTML = `R$ ${totalValue.toFixed(2)}` 
        }
    })
}
filterAll(insertedValues)

// FILTRANDO POR ENTRADAS

function filterInflows(array){
    const main = document.querySelector('.main')
    main.addEventListener('click', (event) => {
        if(event.target.classList.contains('entradas')){
            removeRegisters()
            let filterIn = array.filter(element => {
                if(element.categoryID === 0){
                    return {element}
                }
            })
            filterIn.forEach(element => createCard(valuesCategory, element))
            const totalValue = filterIn.reduce((accumulator, element) => accumulator + element.value, 0);
            const total = document.querySelector('.sum__content')
            total.innerHTML = `R$ ${totalValue.toFixed(2)}`
        }
    })
}
filterInflows(insertedValues)

// FILTRANDO POR SAÍDAS

function filterOutflows(array){
    const main = document.querySelector('.main')
    main.addEventListener('click', (event) => {
        if(event.target.classList.contains('saidas')){
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
        }
    })
}
filterOutflows(insertedValues)

// REMOVENDO REGISTRO DE VALOR ESPECÍFICO

function removeValue(array){
    const main = document.querySelector('.main')
    main.addEventListener('click', (event) => {
        if(event.target.classList.contains('item__remove')){
            const elementId = event.composedPath()[2].id
            array.forEach((element, indice) => {
               if(element.id == elementId){
                return array.splice(indice, 1)
               }
            })
            removeRegisters()
            array.forEach(element => createCard(valuesCategory, element))
        }
    })
}
removeValue(insertedValues)

