const COUNT_ELEMENTS = document.querySelector('.catalog_products__bottom-count');
// let count_elements = 20;
import { count_elements11 } from '../GlobalVariable_copy';
import { urlJsonServer } from '../GlobalVariable';
import printCard from "../catalog/printCard";
import { getZapros, transformData } from "../fetch/fetch";
import convertObjectToInArray from "../function/convertObjectToInArray";

COUNT_ELEMENTS && COUNT_ELEMENTS.addEventListener('change', (e) => countElementsChange(e));

async function countElementsChange() {
    const SHOW_LIST = document.querySelector('.search-product__off .catalog_product-grid');
    // console.log(COUNT_ELEMENTS.selectedOptions[0].innerText);
    // console.log(COUNT_ELEMENTS.selectedIndex);
    // console.log(COUNT_ELEMENTS.value);
    const COUNT_INDEX = COUNT_ELEMENTS.selectedOptions[0].innerText;
    setCountLocalStorage(COUNT_INDEX);
    const catalogs = (SHOW_LIST.dataset.catalogs).split(' ');
    const DATA_PRODUCTS = transformData(await getZapros(urlJsonServer + 'shop/', 'category', catalogs, 'rand()', 'limit=' + getCountLocalStorage()));
    console.log(DATA_PRODUCTS);
    printCard(convertObjectToInArray(DATA_PRODUCTS, new Array()), catalogs, '.search-product__off .catalog_product-grid');
}

export function getCountLocalStorage() {
    const countIndex = localStorage.getItem('count_elements');
    // count_elements = countIndex;
    COUNT_ELEMENTS.selectedOptions[0].innerText = countIndex;
    return countIndex;
}

export function setCountLocalStorage(countIndex) {
    console.log(countIndex)
    // count_elements = countIndex;
    localStorage.setItem('count_elements', countIndex);
}
// let c = count_elements11
// // count_elements11 = 5465;