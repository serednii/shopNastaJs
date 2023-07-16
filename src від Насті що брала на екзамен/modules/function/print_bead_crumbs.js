// ***************************************************************************
import { CATALOGHTML } from '../GlobalVariable';

const breadcrumbsListWrapper = document.querySelector('.breadcrumbs');
let page = 0;
const count = 15;

function printBreadCrumbs(LevelCatalog, catalogs) {

    //Видаляємо  всі елементи
    const items = document.querySelectorAll('.breadcrumbs__item + .breadcrumbs__item + .breadcrumbs__item ')
    if (items) items.forEach(e => e.remove())


    // console.log(LevelCatalog)
    if (LevelCatalog === 1) {
        const crumbsItemHTML = `
                    <li class="breadcrumbs__item" >
                <span class="breadcrumbs__link_end">
                    <span class>${catalogs[0]}</span>
                    <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                            fill="black" />
                    </svg>
                </span>
            </li>
                    `

        if (breadcrumbsListWrapper) breadcrumbsListWrapper.insertAdjacentHTML('beforeend', crumbsItemHTML);
    } else if (LevelCatalog === 2) {
        const crumbsItemHTML = `
            <li class="breadcrumbs__item">
            <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalog_00="${catalogs[0]}" data-level_catalog="1">
                <span >${catalogs[0]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </a>
        </li>

        <li class="breadcrumbs__item">
            <span class="breadcrumbs__link_end">
                <span>${catalogs[1]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </span>

        </li>`
        if (breadcrumbsListWrapper) breadcrumbsListWrapper.insertAdjacentHTML('beforeend', crumbsItemHTML);

    } else if (LevelCatalog === 3) {
        const crumbsItemHTML = `
            <li class="breadcrumbs__item">
            <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalog_00="${catalogs[0]}" data-catalog_01="${catalogs[1]}" data-level_catalog="1">
                <span >${catalogs[0]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </a>
        </li>

            <li class="breadcrumbs__item">
            <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalog_00="${catalogs[0]}"   data-catalog_01="${catalogs[1]}" data-level_catalog="2">
                <span >${catalogs[1]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </a>
        </li>

        <li class="breadcrumbs__item">
            <span class="breadcrumbs__link_end">
                <span>${catalogs[2]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </span>

        </li>`
        if (breadcrumbsListWrapper) breadcrumbsListWrapper.insertAdjacentHTML('beforeend', crumbsItemHTML);

    } else if (LevelCatalog === 1000) {// 
        const crumbsItemHTML = `
            <li class="breadcrumbs__item">
            <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalog_00="${catalogs[0]}" data-catalog_01="${catalogs[1]}" data-catalog_02="${catalogs[2]}" data-level_catalog="1">
                <span >${catalogs[0]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </a>
        </li>

            <li class="breadcrumbs__item">
            <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalog_00="${catalogs[0]}"   data-catalog_01="${catalogs[1]}" data-catalog_02="${catalogs[2]}" data-level_catalog="2">
                <span >${catalogs[1]}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </a>
        </li>

        <li class="breadcrumbs__item">
        <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalog_00="${catalogs[0]}"   data-catalog_01="${catalogs[1]}"  data-catalog_02="${catalogs[2]}"  data-level_catalog="3">
            <span >${catalogs[2]}</span>
            <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                    fill="black" />
            </svg>
        </a>
    </li>
`
        if (breadcrumbsListWrapper) breadcrumbsListWrapper.insertAdjacentHTML('beforeend', crumbsItemHTML);

    }

}
export default printBreadCrumbs;

