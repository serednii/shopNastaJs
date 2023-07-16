// ***************************************************************************
import convertObjectToInArray from "../function/convertObjectToInArray";
const subCatalogListWrapper = document.querySelector('.catalog_products  .catalog_list');
import { CATALOGHTML } from '../GlobalVariable';
function printSubCatalog(LevelCatalog, catalogs, data) {
    console.log(LevelCatalog)
    console.log(catalogs)
    console.log(data)


    // [catalogs[1]]

    if (LevelCatalog === 100) {
        // console.log("LEVEL 111")

        for (const key in data) {
            // console.log(LevelCatalog)
            const _data = convertObjectToInArray(data[key], new Array());
            // console.log(key);
            // console.log(data[key])
            // console.log(data)
            // console.log(_data);
            let i = Math.floor(Math.random() * _data.length);
            // console.log("i " + i)

            const subCAtalogItemHTML = `
                    <li class="catalog_item data-catalog-level"  data-catalog_00="${key}" data-catalog_01="" data-catalog_02="" data-level_catalog="1">
                    <a href="${CATALOGHTML}">
                        <img src="${_data[i].images[0].img}" alt="${_data[i].images[0].alt}">
                    </a>
                    <a href="${CATALOGHTML}">${key}</a>
                </li>
                        `

            if (subCatalogListWrapper) subCatalogListWrapper.insertAdjacentHTML('beforeend', subCAtalogItemHTML);

        }
    } else if (LevelCatalog === 1) {
        // console.log("LEVEL 111");

        for (const key in data[catalogs[0]]) {
            // console.log(LevelCatalog);
            const _data = convertObjectToInArray(data[catalogs[0]][key], new Array());
            // console.log(key);
            // console.log(data[catalogs[0]][key]);
            // console.log(data[catalogs[0]]);
            // console.log(_data);
            let i = Math.floor(Math.random() * _data.length);
            // console.log("i " + i);

            let level_0, level_1, level_2;
            // switch (LevelCatalog) {
            //     case 1:
            level_0 = catalogs[0];
            level_1 = key;
            level_2 = undefined;
            //         break;
            //     case 2:
            //         level_0 = catalogs[0];
            //         level_1 = catalogs[1];
            //         level_2 = key;
            //         break;
            //     default:
            // }

            const subCAtalogItemHTML = `
                    <li class="catalog_item data-catalog-level"  data-catalog_00="${level_0}" data-catalog_01="${level_1}" data-catalog_02="${level_2}" data-level_catalog="${LevelCatalog + 1}">
                    <a href="${CATALOGHTML}">
                        <img src="${_data[i].images[0].img}" alt="${_data[i].images[0].alt}">
                    </a>
                    <a href="${CATALOGHTML}">${key}</a>
                </li>
                        `
            if (subCatalogListWrapper) subCatalogListWrapper.insertAdjacentHTML('beforeend', subCAtalogItemHTML);

        }
    } else if (LevelCatalog === 2) {
        // console.log("LEVEL 222")
        // console.log(catalogs[0])
        // console.log(catalogs[1])
        // console.log(data.sport.Bicycles_and_accessories)

        // console.log(data[catalogs[0]][catalogs[1]])
        for (const key in data[catalogs[0]][catalogs[1]]) {
            // console.log(LevelCatalog)
            const _data = convertObjectToInArray(data[catalogs[0]][catalogs[1]][key], new Array());
            // console.log(key);
            // console.log(Array.isArray(data[catalogs[0]][catalogs[1]]))
            // console.log(data[catalogs[0]][catalogs[1]])
            // console.log(`_data   ${_data}`);
            let i = Math.floor(Math.random() * _data.length);
            // let i = 1
            // console.log("i " + i)

            let level_0, level_1, level_2;
            // switch (LevelCatalog) {
            //     case 1:
            //         level_0 = catalogs[0];
            //         level_1 = key;
            //         level_2 = undefined;
            //         break;
            //     case 2:
            level_0 = catalogs[0];
            level_1 = catalogs[1];
            level_2 = key;
            //         break;
            //     default:

            // }

            const subCAtalogItemHTML = `
                    <li class="catalog_item data-catalog-level"  data-catalog_00="${level_0}" data-catalog_01="${level_1}" data-catalog_02="${level_2}" data-level_catalog="${LevelCatalog + 1}">
                    <a href="${CATALOGHTML}">
                        <img src="${_data[i].images[0].img}" alt="${_data[i].images[0].alt}">
                    </a>
                    <a href="${CATALOGHTML}">${key}</a>
                </li>
                        `

            if (subCatalogListWrapper) subCatalogListWrapper.insertAdjacentHTML('beforeend', subCAtalogItemHTML);

        }
    } else {
        return;
    }





    // let clickSubMenu = document.querySelectorAll('.catalog_list .catalog_item a');
    // console.log(clickSubMenu)
    // if (clickSubMenu) {
    //     clickSubMenu.forEach(e => {
    //         if (e) {
    //             e.addEventListener('click', (_e) => {
    //                 console.log(_e.target)
    //                 e.preventDefault();

    //                 const tempLink = _e.closest('.catalog_list .catalog_item');
    //                 console.log('KLIC SUBMENU CATALOG')

    //                 if (tempLink) {
    //                     const levelCatalog = tempLink.dataset.level_catalog;
    //                     const catalog_00 = tempLink.dataset.catalog_00;
    //                     const catalog_01 = tempLink.dataset.catalog_01;
    //                     const catalog_02 = tempLink.dataset.catalog_02;
    //                     // tempLink.preventDefault();
    //                     catalogcreatecard(Number(levelCatalog), [catalog_00, catalog_01, catalog_02], '.catalog_product-grid');
    //                 }

    //             })
    //         }
    //     })
    // }




}
// ***************************************************************************

export default printSubCatalog;