import {
    createItemsDiv,
    createItemsExoticDiv,
    createItemsFishDiv,
    createBestItemsDiv,
    CreateCategories
} from './ProductsContainers.js';
import {categories, productsList} from './Products.js';

const products = document.querySelector('#main-products-div');
const productsExotic = document.querySelector('#exotic-section-items');
const productsFish = document.querySelector('#fish-section-items');
const bestItems = document.querySelector('#best-items-container-products');

const searchItemNav = document.querySelector('#search-item-nav');
if (searchItemNav) {
    searchItemNav.addEventListener('click', () => {
        const search = document.querySelector('#search-bar-collapse');
        search.style.display === 'none'
            ? search.style.display = 'block'
            : search.style.display = 'none';
    });
}

productsList.forEach((product, index) => {
    createItemsDiv(product, products, index);
    if (product.type === 'exotica') {
        createItemsExoticDiv(product, productsExotic, index);
    } else if (product.type === 'peixe') {
        createItemsFishDiv(product, productsFish, index);
    }
});

Object.entries(categories).forEach(([categoryName, category]) => {
    CreateCategories(categoryName, category);
});


function bestItemsCreate() {
    const productsListCopy = productsList.map(product => ({ ...product }));
    const sortedList = productsListCopy.sort((a, b) => b.sold - a.sold);
    const topFiveProducts = sortedList.slice(0, 5);

    topFiveProducts.forEach((product, index) => {
        const flagImg = document.querySelector(`flag-best-item-${index}`);
        createBestItemsDiv(product, bestItems, index)
    });
}


function updateQuantity(event) {
    const productIndex = event.currentTarget.getAttribute('data-index');
    const product = productsList[productIndex];

    let inputQuantity;
    if (event.currentTarget.classList.contains('circle-item-subtract')) {
        inputQuantity = event.currentTarget.nextElementSibling.firstElementChild;
    } else if (event.currentTarget.classList.contains('circle-item-add')) {
        inputQuantity = event.currentTarget.previousElementSibling.firstElementChild;
    }

    if (!inputQuantity) {
        return;
    }

    const currentValue = inputQuantity.value;
    let newValue;

    if (event.currentTarget.classList.contains('circle-item-subtract')) {
        newValue = parseInt(currentValue) - 1;
    } else if (event.currentTarget.classList.contains('circle-item-add')) {
        newValue = parseInt(currentValue) + 1;
    }

    if (newValue > 0 && newValue <= product.quantity) {
        inputQuantity.value = newValue;
    }
}

document.querySelectorAll('.circle-item-add').forEach((button) => {
    button.addEventListener('click', updateQuantity);
});

document.querySelectorAll('.circle-item-subtract').forEach((button) => {
    button.addEventListener('click', updateQuantity);
});

bestItemsCreate()
