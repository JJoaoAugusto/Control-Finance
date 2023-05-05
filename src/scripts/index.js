

// REMOVENDO REGISTROS DE VALORES
function removeRegisters(){
    const list = document.querySelector('.registers__list')
    list.innerHTML = ''
}



// VRIFICANDO LISTA VAZIA

function verificationList(array){
    const registerList = document.querySelector('.registers__list')
    const sum = document.querySelector('.sum__content')
    const button = document.querySelector('.new__button')

    if(registerList.children.length === 0){
        sum.innerHTML = 'R$ 00.00'
        button.style.display = "flex"
    }
    else{
        const totalValue = array.reduce((accumulator, element) => accumulator + element.value, 0);
        const total = document.querySelector('.sum__content')
        total.innerHTML = `R$ ${totalValue.toFixed(2)}` 
        button.style.display = "none"
    }
}


// CRIANDO CARDS

function createCard (arrayCategory, element, array) {

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

        if(array !== insertedValues){
            insertedValues.forEach((elmt, indice) => {
                if(elmt.id == card.id){
                    insertedValues.splice(indice, 1)
                }
            })
        }
    
        array.forEach((element, indice) => {
            if(element.id == card.id){
                card.remove()
                array.splice(indice, 1)
                renderArray(array)
                verificationList(array)
            }
        })
        
    })
    verificationList(array)
}


// RENDERIZANDO DE ACORDO COM O ARRAY

function renderArray(array){
    removeRegisters()
    array.forEach(element => createCard(valuesCategory, element, array))
}
renderArray(insertedValues)


// FILTRANDO POR TODOS

function filterAll() {
    const all = document.querySelector('.todos')

    all.addEventListener("click", () => {
        removeRegisters()
        renderArray(insertedValues)
        verificationList(insertedValues)
    })
}
filterAll()



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

        renderArray(filterIn)
        verificationList(filterIn)
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

        renderArray(filterOut)
        verificationList(filterOut)
    })
}
filterOutflows(insertedValues)


