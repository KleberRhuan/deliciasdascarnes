import {getProducts} from "./Products.js";
import {createItemsDiv, createItemsExoticDiv, createItemsFishDiv} from "./SvgProducts.js";

document.querySelector('#search-item-nav').addEventListener('click', () => {
    const search = document.querySelector('#search-bar-collapse');
    search.style.display === 'none'
        ? search.style.display = 'block'
        : search.style.display = 'none';
});


window.addEventListener('load', async () => {
    const mainDiv = document.querySelector('#main-products-div');
    const products = await getProducts();
    products.forEach((product, index) => {
        createItemsDiv(product, mainDiv, index);
    })
});