

import { urlJsonServer } from '../GlobalVariable';
import printBreadCrumbs from '../function/print_bead_crumbs';
import printElementHtml from '../function/printElementHtml';
import { startSlider } from '../slider';
function productCreateCart(catalogs, product_id) {
    // console.log('PRODUCT CREAT CART')
    //Робимо запит вбазу даних
    fetch(`${urlJsonServer}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // console.log(catalogs);
            printBreadCrumbs(1000, catalogs);
            // console.log(data[catalogs[0]][catalogs[1]][catalogs[2]]);
            const product = data[catalogs[0]][catalogs[1]][catalogs[2]].find(e => e.id == product_id);
            console.log(product);
            const productAboutMain = document.querySelector('.product_about-main.collect_data');
            if (productAboutMain) {
                productAboutMain.dataset.id = product.id;
                productAboutMain.dataset.catalog_00 = product.catalog[0];
                productAboutMain.dataset.catalog_01 = product.catalog[1];
                productAboutMain.dataset.catalog_02 = product.catalog[2];

            }




            const nameProduct = document.querySelector('.product_top h1');
            if (nameProduct) {
                nameProduct.innerText = product.title;
            }

            const idProduct = document.querySelector('.product_navbar .cod__id');
            if (idProduct) {
                idProduct.innerText = product.id;
            }

            printsliderElements(product);
            printProductPrice(product);
            printParametrElement(product)
            startSlider();
        })
}

function printProductPrice(product) {
    document.querySelector('.product_about__conten .price_container');
    const element = `
   <s class="cena">${product.oldPrice} <span>$</span></s>
   <h3 class="cena">${product.newPrice}  <span>$</span></h3>
`
    printElementHtml('.product_about__content .price_container', element);
}



function printsliderElements(product) {
    product.images.forEach(e => {

        const sliderItemHTML = `
            <li class="product_about-foto-item">
                <img class="product-img" src="${e.img}"   alt="${e.alt}">
            </li>
        `
        printElementHtml('.product_about_foto-big', sliderItemHTML);
        printElementHtml('.product_about_foto-small', sliderItemHTML);

    });
}

function printParametrElement(product) {

    const element = `
    <li class="product_bottom__parametrs-item">
        <dl>
            <dt>Назва</dt>
            <dd>${product.title}</dd>
        </dl>
    </li>`
    printElementHtml('.product_bottom__parametrs-items', element);

    for (const key in product) {
        // console.log(`${key}   ${product[key]}`)
        if (key !== 'id' &&
            key !== 'images' &&
            key !== 'catalog' &&
            key !== 'newPrice' &&
            key !== 'oldPrice' &&
            key !== 'empty' &&
            key !== 'title') {
            const element = `
                <li class="product_bottom__parametrs-item">
                    <dl>
                        <dt>${key}</dt>
                        <dd>${product[key]}</dd>
                    </dl>
                </li>`
            printElementHtml('.product_bottom__parametrs-items', element);
        }

    }
}


export default productCreateCart;