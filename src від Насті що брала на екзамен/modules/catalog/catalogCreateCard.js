import convertObjectToInArray from "../function/convertObjectToInArray";
import { PRODUCTHTML, CATALOGHTML, urlJsonServer } from '../GlobalVariable';
import printBreadCrumbs from '../function/print_bead_crumbs.js'
import printSubCatalog from "./printSubCatalog";
import printCard from "./printCard";
let page = 0;
const count = 15;


function catalogCreateCard(LevelCatalog, catalogs) {


    const title = document.querySelector('.catalog_products__title');

    console.log(catalogs);
    console.log(LevelCatalog);



    fetch(`${urlJsonServer}`)
        .then(response => response.json())
        .then(data => {

            if (LevelCatalog === 100) {
                // console.log("LEVEL 100")
                // printBreadCrumbs(LevelCatalog, catalogs);
                printSubCatalog(LevelCatalog, catalogs, data);
                if (title) title.innerText = "Каталог товарів";

                printCard(convertObjectToInArray(data, new Array()), count, '.search-product__off .catalog_product-grid');
                // console.log(data[catalogs[0]])
            } else if (LevelCatalog === 1) {
                // console.log("LEVEL 1")
                printBreadCrumbs(LevelCatalog, catalogs);
                if (title) title.innerText = catalogs[0];
                printSubCatalog(LevelCatalog, catalogs, data);
                printCard(convertObjectToInArray(data[catalogs[0]], new Array()), count, '.search-product__off .catalog_product-grid');
                // console.log(data[catalogs[0]])
            } else if (LevelCatalog === 2) {
                // console.log("LEVEL 2")
                printBreadCrumbs(LevelCatalog, catalogs);
                if (title) title.innerText = catalogs[1];
                printSubCatalog(LevelCatalog, catalogs, data);
                printCard(convertObjectToInArray(data[catalogs[0]][catalogs[1]], new Array()), count, '.search-product__off .catalog_product-grid');
            } else if (LevelCatalog === 3) {
                // console.log("LEVEL 3")
                printBreadCrumbs(LevelCatalog, catalogs);
                if (title) title.innerText = catalogs[2];
                printCard(data[catalogs[0]][catalogs[1]][catalogs[2]], count);
                printCard(convertObjectToInArray(data[catalogs[0]][catalogs[1]][catalogs[2]], new Array()), count, '.search-product__off .catalog_product-grid');
            }
        })

    // .then(commits => {

    //     console.log(commits)
    //     // if(typeCatalog === 'main'){
    //     setTimeout(stratLocalStorage, 2000)
    //     // }
    // }
    // );


    // const data = convertObjectToInArray(data1, new Array())
    // console.log(data.length);
    // console.log(data);




}





export default catalogCreateCard;

