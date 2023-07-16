import './index.html';
import './index.scss';
import 'jquery-form-styler';
require('jquery-form-styler');

import './modules/slider';
import './modules/timer_clock';
import './modules/filter/filter';
import './modules/count_cards/count_cards';

import { urlJsonServer } from './modules/GlobalVariable';
import inputEye from './modules/input_eye';
import clickTab from './modules/clickTab';
import singInOpen from './modules/sing-in-open';
import singInClose from './modules/sing-in-close';
import formRegisterOpen from './modules/changeformregister';
import addRemoveClass from './modules/addRemoveClass';
import cardList from './modules/card/card';
import deleteCard from './modules/card/deleteCard';
import { stratLocalStorage } from './modules/card/addLocalStorage';
import generateCards from './modules/generateCards/generateCards';
import generateCardsBestDeals from './modules/generateCards/generate_card_best_deals';
import { changeDate } from './modules/timer_clock';
import catalogcreatecard from './modules/catalog/catalogCreateCard';
import productCreateCart from './modules/product/product_create_cart';
import { dataGlobalJson, count_elements } from './modules/GlobalVariable';
import searchCatalogCreateCard from './modules/catalog/searchCatalogCreateCard';
import { getZapros, getZaprosFunction, transformData } from './modules/fetch/fetch';
import convertObjectToInArray from './modules/function/convertObjectToInArray';
import { getCountLocalStorage } from './modules/count_cards/count_cards';



// http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/filter-category=Гаджети/filter-category=Гаджети/

const hoverMainMenu = document.querySelector('.hover_maim_menu');
// const body = document.querySelector('body');
const body = document.body;
// let categoryList = {};
// console.log(hoverMainMenu)

body.addEventListener('click', (e) => {
    const targetElement = e.target
    const catalogLink = targetElement.closest('.data-catalog-level');

    // console.log(targetElement);

    // e.stopPropagation();

    if (targetElement.closest('.main-menu__icon-wrapper')) {
        const burger = targetElement.closest('.main-menu__icon-wrapper');
        burger.classList.toggle('open-burger');//open or close burger
        hoverMainMenu.classList.toggle('open-burger');//open or close menu
    } else if (!targetElement.closest('.hover_maim_menu')) {
        document.querySelectorAll('.main-menu__icon-wrapper').forEach((e) => e.classList.remove('open-burger'));;//when clicking outside the all burgers , we close it
        hoverMainMenu.classList.remove('open-burger');//when clicking outside the menu, we close it
    }

    if (targetElement.closest('.data-click-card')) {//клік на іконці улюблених товарів та  кнопці  товарів корзини
        cardList(targetElement);
    }


    else if (targetElement.closest('.cart_list__list-ware_basket')) {//Видаляємо картку з корзини i улюблених
        if (targetElement.closest('.cart_list__cart')) {
            deleteCard(targetElement, '.cart_list__cart');//корзини
        } else {
            deleteCard(targetElement, '.cart_list__likes');//улюблених
        }
    }

    else if (targetElement.closest('.our_products .menu_products__item')) {
        clickTab('our_products', targetElement);
    } else if (targetElement.closest('.bestdeals .menu_products__item')) {
        clickTab('bestdeals', targetElement);
    } else if (targetElement.classList.contains('eye')) {
        inputEye(targetElement);
    } else if (targetElement.classList.contains('sing-in')) {
        singInOpen();
    } else if (targetElement.closest('.sing-in-registration .menu_circle_close')) {
        singInClose();
    } else if (targetElement.classList.contains('sing-in-registration__btn-register') || targetElement.classList.contains('register')) {//Відкриває форму регістрації
        formRegisterOpen();
    }
    else if (targetElement.closest('.header__user .heart')) {//Відкриває форму з карточками уподобань
        addRemoveClass('.cart_list__likes', 'remove', 'hidden');
        addRemoveClass('body', 'add', 'overflov-hidden');
        addRemoveClass('.fon', 'remove', 'hidden');
    }
    else if (targetElement.closest('.header__user .cart')) {//Відкриває форму з карточками корзини
        addRemoveClass('.cart_list__cart', 'remove', 'hidden');
        addRemoveClass('body', 'add', 'overflov-hidden');
        addRemoveClass('.fon', 'remove', 'hidden');
    }
    else if (targetElement.closest('.cart_list_btn__close')) {
        addRemoveClass('.cart_list', 'add', 'hidden'); //Закриває форму з карточками корзини
        addRemoveClass('.cart_list__likes', 'add', 'hidden');//Закриває форму з карточками уподобань
        addRemoveClass('body', 'remove', 'overflov-hidden');//Відміняє прокручування форми
        addRemoveClass('.fon', 'add', 'hidden');//забирає фон
        addRemoveClass('.input_change_time', 'add', 'hidden');//закриває вікно на таймеру
    }
    else if (targetElement.closest('.header__user .user')) { //Відкриває форму особистого кабінету
        addRemoveClass('.user_button', 'remove', 'hidden');
        addRemoveClass('body', 'add', 'overflov-hidden');
        addRemoveClass('.fon', 'remove', 'hidden');
    }
    else if (targetElement.closest('.user_button_btn__close')) {//Закриває форму особистого кабінету
        addRemoveClass('.user_button', 'add', 'hidden');
        addRemoveClass('body', 'remove', 'overflov-hidden');
        addRemoveClass('.fon', 'add', 'hidden');
    }
    // else if (targetElement.closest('.timer')) {//Відкриває форму для настройок таймера
    //     addRemoveClass('.input_change_time', 'remove', 'hidden');
    //     document.querySelector('.input_change_time').addEventListener('change', e => changeDate(e));
    // }
    else if (catalogLink) { //При кліку на  підменю в каталозі При кліку на меню breadcrumbs
        console.log('KLIC data-catalog-level')
        if (catalogLink) {
            sessionStorage.setItem('catalogs', catalogLink.dataset.catalogs);
            // sessionStorage.setItem('catalog_00', catalogLink.dataset.catalog_00);
            // sessionStorage.setItem('catalog_01', catalogLink.dataset.catalog_01);
            // sessionStorage.setItem('catalog_02', catalogLink.dataset.catalog_02);
            sessionStorage.setItem('levelCatalog', catalogLink.dataset.level_catalog);
            sessionStorage.setItem('product_id', catalogLink.dataset.id);
            // catalogLink.preventDefault();
            // catalogcreatecard(Number(levelCatalog), [catalog_00, catalog_01, catalog_02], );
        }
    }
})






async function start() {
    let categoryList = await getZapros(urlJsonServer + 'shop_category/');
    categoryList = JSON.parse(categoryList[0].category)[0];
    console.log(categoryList);

    console.log(window.location.pathname.length);
    //Якщо голловна сторінка
    if (window.location.pathname.includes('/index.html') || window.location.pathname.length === 1) {

        // sessionStorage.setItem('catalog_00', '');
        // sessionStorage.setItem('catalog_01', '');
        // sessionStorage.setItem('catalog_02', '');
        // sessionStorage.setItem('levelCatalog', '');
        // sessionStorage.setItem('product_id', '');
        // let ooo = transformData(await getZapros(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Гаджети']))
        // console.log(ooo)

        generateCards(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Гаджети'], 'rand()', 'limit=6')), '.arrivals__cards .cards');
        generateCards(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], 'rand()', 'limit=8')), '.easy_monthly .cards');
        generateCards(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Смартфони'], 'rand()', 'limit=8')), '.on_sale .cards');
        generateCards(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], 'rand()', 'limit=8')), '.top_rated .cards');

        generateCardsBestDeals(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Гаджети'], 'rand()', 'limit=5')), '.kitchen_appliances .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], 'rand()', 'limit=5')), '.consoles .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Смартфони'], 'rand()', 'limit=5')), '.tv_video .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], 'rand()', 'limit=5')), '.cell_phones .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Гаджети'], 'rand()', 'limit=5')), '.grocery .bestdeals_main-cards');

        getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Гаджети'], generateCards, '.arrivals__cards .cards', 6)
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], generateCards, '.easy_monthly .cards', 8)
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Смартфони'], generateCards, '.on_sale .cards', 8);
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], generateCards, '.top_rated .cards', 8)

        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Смартфони'], generateCardsBestDeals, '.kitchen_appliances .bestdeals_main-cards ', 1)
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], generateCardsBestDeals, '.consoles .bestdeals_main-cards', 1)
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Компютери'], generateCardsBestDeals, '.tv_video .bestdeals_main-cards', 1)
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Смартфони'], generateCardsBestDeals, '.cell_phones .bestdeals_main-cards', 1)
        // getZaprosFunction(urlJsonServer, 'category', ['Електроніка', 'Гаджети', 'Ноутбуки'], generateCardsBestDeals, '.grocery .bestdeals_main-cards', 1)

        stratLocalStorage('.cart_list__cart', 'cart');
        stratLocalStorage('.cart_list__likes', 'likes');
        // getCountLocalStorage();
        // setTimeout(() => {
        //     // stratLocalStorage('.cart_list__cart', 'cart');
        //     // stratLocalStorage('.cart_list__likes', 'likes')
        //     console.log('22222')

        //         
        // }, 2000);
        //Якщо не головні сторінки 

    } else {

        const LEVEL_CATALOG = Number(sessionStorage.getItem('levelCatalog'));
        let catalogs = sessionStorage.getItem('catalogs').split(' ');
        if (catalogs[0] === 'undefined') catalogs = [];
        let product_id = sessionStorage.getItem('product_id');

        // console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
        // console.log(catalogs);
        // console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
        // console.log(LEVEL_CATALOG);

        //Якщо головний каталог або підкаталоги
        if (LEVEL_CATALOG >= 0 || LEVEL_CATALOG <= 100) {
            await catalogcreatecard(LEVEL_CATALOG, catalogs, categoryList);
        }

        //Якщо карточка товару
        if (LEVEL_CATALOG === 1000) {
            await productCreateCart(catalogs, product_id);
        }

        stratLocalStorage('.cart_list__cart', 'cart');
        stratLocalStorage('.cart_list__likes', 'likes');
        // getCountLocalStorage();
    }
}

// fetch('http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/limit=5/rand()')
//     .then(rez => rez.json())
//     .then(data => console.log(data))

// fetch('http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/limit=20/rand()')
//     .then(rez => rez.json())
//     .then(data => console.log(data))

// fetch('http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/limit=5/rand()')
//     .then(rez => rez.json())
//     .then(data => console.log(data))


start();
// const rezakt = await getZapros(urlJsonServer);

// console.log(await getZapros(urlJsonServer))

// fetch(`http://trygonimetry.smm.zzz.com.ua/shop`)
// fetch(`${urlJsonServer}`)
//     .then(response => response.json())
//     .then(commits => {
//         console.log(commits)
//         let result = convertObjectToInArray(commits, new Array());
//         console.log(result)

//     })

// generateCards(dataGlobalJson.Електроніка.Гаджети.Компютери, '.arrivals__cards .cards', 6);

// console.log(`href  ${window.location.href}`)
// console.log(`host  ${window.location.host}`)
// console.log(`hostname  ${window.location.hostname}`)
// console.log(`hash  ${window.location.hash}`)
// console.log(`origin  ${window.location.origin}`)
// console.log(`pathname  ${window.location.pathname.includes('/index.html')}`)
// fetch(`http://trygonimetry.smm.zzz.com.ua/shop`)
//     // fetch(`${urlJsonServer}`)
//     .then(response => response.json())
//     .then(commits => {
//         console.log(commits)
//         Object.assign(dataGlobalJson, commits)
//         if (window.location.pathname.includes('/index.html')) {
//             sessionStorage.setItem('catalog_00', '');
//             sessionStorage.setItem('catalog_01', '');
//             sessionStorage.setItem('catalog_02', '');
//             sessionStorage.setItem('LEVEL_CATALOG', '');
//             sessionStorage.setItem('product_id', '');
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Компютери, '.arrivals__cards .cards', 6);
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.easy_monthly .cards', 8);
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Компютери, '.on_sale .cards', 8);
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.top_rated .cards', 8);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Смартфони, '.kitchen_appliances .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.consoles .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Компютери, '.tv_video .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Смартфони, '.cell_phones .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.grocery .bestdeals_main-cards ', 1);

//             setTimeout(() => {
//                 stratLocalStorage('.cart_list__cart', 'cart');
//                 stratLocalStorage('.cart_list__likes', 'likes')
//                     , 2000
//             });
//         } else {
//             setTimeout(() => {
//                 stratLocalStorage('.cart_list__cart', 'cart');
//                 stratLocalStorage('.cart_list__likes', 'likes')
//                     , 2000
//             });
//             let LEVEL_CATALOG = Number(sessionStorage.getItem('LEVEL_CATALOG'));
//             let catalog_00 = sessionStorage.getItem('catalog_00');
//             let catalog_01 = sessionStorage.getItem('catalog_01');
//             let catalog_02 = sessionStorage.getItem('catalog_02');
//             let product_id = sessionStorage.getItem('product_id');

//             // console.log(catalog_00)
//             // console.log(LEVEL_CATALOG)
//             // if (catalog_00 && LEVEL_CATALOG) {
//             console.log(catalog_00)
//             console.log(catalog_01)
//             console.log(catalog_02)
//             console.log(LEVEL_CATALOG)
//             // sessionStorage.setItem('catalog_00', '');
//             // sessionStorage.setItem('LEVEL_CATALOG', '');
//             if (LEVEL_CATALOG === 1 || LEVEL_CATALOG === 2 || LEVEL_CATALOG === 3 || LEVEL_CATALOG === 100) {
//                 catalogcreatecard(LEVEL_CATALOG, [catalog_00, catalog_01, catalog_02]);
//             }

//             if (LEVEL_CATALOG === 1000) {
//                 productCreateCart([catalog_00, catalog_01, catalog_02], product_id);
//             }
//             // }
//         }
//     });








// console.log(dataGlobalJson);

const mainSearch = document.querySelector('.main-search');
console.log(mainSearch)
// const catalogProducts = document.querySelector('.catalog_products');
if (mainSearch) {

    mainSearch.addEventListener('input', (e) => {
        let searchText = e.target.value;

        if (!!searchText) {
            addRemoveClass('.search-product__on', 'remove', 'hidden');
            addRemoveClass('.search-product__off', 'add', 'hidden');
            searchCatalogCreateCard(searchText, dataGlobalJson);
            console.log(searchText);
            // console.log(dataGlobalJson);
        } else {
            addRemoveClass('.search-product__on', 'add', 'hidden');
            addRemoveClass('.search-product__off', 'remove', 'hidden');
        }

    })

}












