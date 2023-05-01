// ***************************************************************************
// import arrayToObject from "../function/arrayToObject";
import convertObjectToInArray from "../function/convertObjectToInArray";
const subCatalogListWrapper = document.querySelector('.catalog_products  .catalog_list');
import { CATALOGHTML } from '../GlobalVariable';


function printSubCatalog(LevelCatalog, catalogs, data) {
    // console.log(LevelCatalog)
    // console.log(catalogs)
    // console.log(data)

    if (LevelCatalog === 100) {



        for (const key in data) {
            const _data = convertObjectToInArray(data[key], new Array());
            let i = Math.floor(Math.random() * _data.length);
            // console.log(key)
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
        for (const key in data[catalogs[0]]) {
            const _data = convertObjectToInArray(data[catalogs[0]][key], new Array());
            let i = Math.floor(Math.random() * _data.length);
            let level_0, level_1, level_2;
            level_0 = catalogs[0];
            level_1 = key;
            level_2 = undefined;
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
        for (const key in data[catalogs[0]][catalogs[1]]) {
            const _data = convertObjectToInArray(data[catalogs[0]][catalogs[1]][key], new Array());
            let i = Math.floor(Math.random() * _data.length);

            let level_0, level_1, level_2;
            level_0 = catalogs[0];
            level_1 = catalogs[1];
            level_2 = key;
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
}
// ***************************************************************************

export default printSubCatalog;