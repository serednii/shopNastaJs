import convertObjectToInArray from "../function/convertObjectToInArray";
import { PRODUCTHTML, CATALOGHTML, urlJsonServer } from '../GlobalVariable';
// import printBreadCrumbs from '../function/print_bead_crumbs.js'
import printCard from "./printCard";
import printSubCatalog from "./printSubCatalog";

const count = 15;


function searchCatalogCreateCard(searchText, dataGlobalJson) {
    const cartListWrapper = document.querySelector('.catalog_product-grid');

    const title = document.querySelector('.catalog_products__title');
    const subCatalogListWrapper = document.querySelector('.catalog_products  .catalog_list');
    // console.log(dataGlobalJson);
    let result = convertObjectToInArray(dataGlobalJson, new Array());
    // console.log(result);

    result = result.filter(object => {
        for (const key in object) {

            if (!Array.isArray(object[key])) {

                if (key.toLowerCase().includes(searchText.toLowerCase())) {
                    console.log(`${key}  ${object[key]}`);
                    return true;
                }

                if (object[key].toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                }

            } else {
                // object[key].forEach(element => {
                //     console.log(element)
                //     if((typeof element) === 'String')
                //     if(element.toLowerCase().includes(searchText.toLowerCase())){
                //         return true;
                //     }
                // });
            }


        }
    }
    )
    // console.log(result);
    printCard(result, result.length, '.catalog_product-grid-search');




    // const filtredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));





}





export default searchCatalogCreateCard;

