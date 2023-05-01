import convertObjectToInArray from "../function/convertObjectToInArray";
import { PRODUCTHTML, CATALOGHTML, urlJsonServer } from '../GlobalVariable';
import printBreadCrumbs from '../function/print_bead_crumbs.js'
import printSubCatalog from "./printSubCatalog";
import printCard from "./printCard";
import { getZapros, transformData, allDataSearch } from "../fetch/fetch";
import arrayToObject from "../function/arrayToObject";
let page = 0;
const count = 15;


async function catalogCreateCard(LevelCatalog, catalogs) {


    const title = document.querySelector('.catalog_products__title');

    console.log(catalogs);
    console.log(LevelCatalog);
    // transformData(await getZapros(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Гаджети']))
    const _data = transformData(await getZapros(urlJsonServer))
    const objectData = arrayToObject(_data);


    // fetch(urlJsonServer)
    //     .then(response => response.json())
    //     .then(data => {
    //         const _data = transformData(data);
    //         const objectData = arrayToObject(_data);
    // console.log(objectData)
    if (LevelCatalog === 100) {
        printSubCatalog(LevelCatalog, catalogs, objectData);
        if (title) title.innerText = "Каталог товарів";
        printCard(_data, count, '.search-product__off .catalog_product-grid');
    } else if (LevelCatalog === 1) {
        printBreadCrumbs(LevelCatalog, catalogs);
        if (title) title.innerText = catalogs[0];
        printSubCatalog(LevelCatalog, catalogs, objectData);
        printCard(convertObjectToInArray(objectData[catalogs[0]], new Array()), count, '.search-product__off .catalog_product-grid');
    } else if (LevelCatalog === 2) {
        printBreadCrumbs(LevelCatalog, catalogs);
        if (title) title.innerText = catalogs[1];
        printSubCatalog(LevelCatalog, catalogs, objectData);
        printCard(convertObjectToInArray(objectData[catalogs[0]][catalogs[1]], new Array()), count, '.search-product__off .catalog_product-grid');
    } else if (LevelCatalog === 3) {
        printBreadCrumbs(LevelCatalog, catalogs);
        if (title) title.innerText = catalogs[2];
        // printCard(data[catalogs[0]][catalogs[1]][catalogs[2]], count);
        printCard(convertObjectToInArray(objectData[catalogs[0]][catalogs[1]][catalogs[2]], new Array()), count, '.search-product__off .catalog_product-grid');
    }

    // }
    // )

}



export default catalogCreateCard;

