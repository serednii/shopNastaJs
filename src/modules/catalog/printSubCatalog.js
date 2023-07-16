// ***************************************************************************
import { CATALOGHTML } from '../GlobalVariable';
import { getZapros, getZaprosFunction, transformData } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';



function printSubCatalog(LevelCatalog, catalogs, categoryList) {
    const subCatalogListWrapper = document.querySelector('.catalog_products  .catalog_list');


    // if (LevelCatalog === 0) {

    //     const objKey = Object.keys(categoryList);
    //     objKey.forEach(async _category => {
    //         const [_product] = transformData(await getZapros(urlJsonServer + 'shop/', 'category', [_category, '', ''], 'rand()', '/limit=1'));
    //         // console.log(_category);
    //         // console.log(_product);
    //         const subCAtalogItemHTML = `
    //         <li class="catalog_item data-catalog-level" data-catalogs="${_category}" data-level_catalog="1">
    //             <a href="${CATALOGHTML}">
    //                 <img src="${_product.images[0].img}" alt="${_product.images[0].alt}">
    //             </a>
    //             <a href="${CATALOGHTML}">${_category}</a>
    //         </li>
    //             `
    //         if (subCatalogListWrapper) subCatalogListWrapper.insertAdjacentHTML('beforeend', subCAtalogItemHTML);
    //     });

    // } else 
    if (LevelCatalog >= 0 && LevelCatalog <= 100) {
        let OBJ_KEY = categoryList;
        const ARR_CATALOG = [];
        for (let i = 1; i <= LevelCatalog; i++) {
            OBJ_KEY = OBJ_KEY[catalogs[i - 1]];
            ARR_CATALOG.push(catalogs[i - 1])
        }
        console.log(OBJ_KEY)
        OBJ_KEY = Object.keys(OBJ_KEY)
        console.log(OBJ_KEY)

        OBJ_KEY.forEach(async _category => {
            console.log(_category)
            const [_product] = transformData(await getZapros(urlJsonServer + 'shop/', 'category', [...ARR_CATALOG, _category], 'rand()', '/limit=1'));
            const subCAtalogItemHTML = `
            <li class="catalog_item data-catalog-level"  data-catalogs="${[...ARR_CATALOG, _category].join(' ')}" data-level_catalog="${LevelCatalog + 1}">
            <a href="${CATALOGHTML}">
                <img src="${_product.images[0].img}" alt="${_product.images[0].alt}">
            </a>
            <a href="${CATALOGHTML}">${_category}</a>
        </li>
                `

            if (subCatalogListWrapper) subCatalogListWrapper.insertAdjacentHTML('beforeend', subCAtalogItemHTML);

        });

    } else {
        return;
    }
}
// ***************************************************************************

export default printSubCatalog;