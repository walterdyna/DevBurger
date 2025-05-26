const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-All');
const filterall = document.querySelector('.filter-all');

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue;
}

function showAll(productsArray) {

    let myLi = ''; // Reset the list content

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src} alt=${product.name}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myLi;
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, // Spread operator 
        price: product.price * 0.9,// Applying a 10% discount

    }));
    showAll(newPrices);
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    list.innerHTML =
        `
        <li>
        <p>O Valor total dos itens é ${formatCurrency(totalValue)} </p>
        </li >
        `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan);
    showAll(filterJustVegan);
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems);
filterall.addEventListener('click', filterAllItems);