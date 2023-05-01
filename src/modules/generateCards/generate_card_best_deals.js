import { PRODUCTHTML } from '../GlobalVariable';




function generateCardsBestDeals(data, clases) {
    const cartListWrapper = document.querySelector(clases);

    const cartItemHTML = `
            <li class="bestdeals_main-card block_1 data-catalog-level" 
            data-catalog_00="${data[0].catalog[0]}" 
            data-catalog_01="${data[0].catalog[1]}"  
            data-catalog_02="${data[0].catalog[2]}" 
            data-level_catalog="1000"
            data-id="${data[0].id}"
                >
                <!-- 1 -->
                <div class="bestdeals_main-card__left">
                    <a href="${PRODUCTHTML}" class="bestdeals_main-card__name">${data[0].title.replace(/Характеристики/g, "")}</a>
                    <span class="bestdeals_main-card__newprise"><span class="valuta">UA</span> <span
                            class="cena">${data[0].newPrice}</span></span>
                    <s class="bestdeals_main-card__oldprise"><span class="valuta">UA</span> <span
                            class="cena">${data[0].oldPrice}</span> </s>
                    <div class="bestdeals_main-card__sale"><span>Save 10%</span></div>
                </div>
                <div class="bestdeals_main-card__right">
                    <p class="bestdeals_main-card__offer special_offer"><span>Special</span> Offer
                    </p>
                    <a href="${PRODUCTHTML}" class="bestdeals_main-card__img-wrapp">
                        <img class="product-img" src="${data[0].images[0].img} " alt="${data[0].images[0].alt}"
                            class="bestdeals_main-card__img">
                    </a>
                </div>
            </li>
    
            <li class="bestdeals_main-card block_2 data-catalog-level"  
            data-catalog_00="${data[1].catalog[0]}" 
            data-catalog_01="${data[1].catalog[1]}"  
            data-catalog_02="${data[1].catalog[2]}" 
            data-level_catalog="1000"
            data-id="${data[1].id}">
                <!-- 2  -->
                <div class="bestdeals_main-card__sale"><span>Save 10%</span></div>
                <p class="bestdeals_main-card__offer special_offer"><span>Special</span> Offer</p>
                <a href="${PRODUCTHTML}" class="bestdeals_main-card__img-wrapp">
                    <img class="product-img"src="${data[1].images[0].img} " alt="${data[1].images[0].alt}"
                        class="bestdeals_main-card__img">
                </a>
                <a href="${PRODUCTHTML}" class="bestdeals_main-card__name">${data[1].title.replace(/Характеристики/g, "")}</a>
                <span class="bestdeals_main-card__newprise"><span class="valuta">UA</span> <span
                        class="cena">${data[1].newPrice}</span></span>
                <s class="bestdeals_main-card__oldprise"><span class="valuta">UA</span> <span
                        class="cena">${data[1].oldPrice}</span></s>
                <p class="bestdeals_main-card__already_available">
                    <span class="bestdeals_main-card__already">Already Sold: 6</span>
                    <span class="bestdeals_main-card__available">Available: 30</span>
                </p>
            </li>
    
            <li class="bestdeals_main-card block_3 data-catalog-level" 
            data-catalog_00="${data[2].catalog[0]}" 
            data-catalog_01="${data[2].catalog[1]}"  
            data-catalog_02="${data[2].catalog[2]}" 
            data-level_catalog="1000"
            data-id="${data[2].id}">
                <!-- 3  -->
                <div class="bestdeals_main-card__left">
                    <a href="${PRODUCTHTML}" class="bestdeals_main-card__name">${data[2].title.replace(/Характеристики/g, "")}</a>
                    <span class="bestdeals_main-card__newprise"><span class="valuta">UA</span> <span
                            class="cena">${data[2].newPrice}</span></span>
                    <s class="bestdeals_main-card__oldprise"><span class="valuta">UA</span> <span
                            class="cena">${data[2].oldPrice}</span></s>
                    <div class="bestdeals_main-card__sale"><span>Save 10%</span></div>
                </div>
                <div class="bestdeals_main-card__right">
                    <p class="bestdeals_main-card__offer special_offer"><span>Special</span> Offer
                    </p>
                    <a href="${PRODUCTHTML}" class="bestdeals_main-card__img-wrapp">
                        <img class="product-img" src="${data[2].images[0].img} " alt="${data[2].images[0].alt}"
                            class="bestdeals_main-card__img">
                    </a>
                </div>
            </li>
    
            <li class="bestdeals_main-card block_4 data-catalog-level" 
            data-catalog_00="${data[3].catalog[0]}" 
            data-catalog_01="${data[3].catalog[1]}"  
            data-catalog_02="${data[3].catalog[2]}" 
            data-level_catalog="1000"
            data-id="${data[3].id}"
                >
                <!-- 4 -->
                <div class="bestdeals_main-card__left">
                    <p class="bestdeals_main-card__offer special_offer"><span>Special</span> Offer
                    </p>
                    <a href="${PRODUCTHTML}" class="bestdeals_main-card__name">${data[3].title.replace(/Характеристики/g, "")}</a>
                    <span class="bestdeals_main-card__newprise"><span class="valuta">UA</span> <span
                            class="cena">${data[3].newPrice}</span></span>
                    <s class="bestdeals_main-card__oldprise"><span class="valuta">UA</span> <span
                            class="cena">${data[3].oldPrice}</span></s>
                    <p class="bestdeals_main-card__already_available">
                        <span class="bestdeals_main-card__already">Already Sold: 6</span>
                        <span class="bestdeals_main-card__available">Available: 30</span>
                    </p>
                </div>
                <div class="bestdeals_main-card__right">
                    <div class="bestdeals_main-card__sale"><span>Save 10%</span></div>
                    <a href="${PRODUCTHTML}" class="bestdeals_main-card__img-wrapp">
                        <img class="product-img" src="${data[3].images[0].img} " alt="${data[3].images[0].alt}"
                            class="bestdeals_main-card__img">
                    </a>
                </div>
            </li>
    
            <li class="bestdeals_main-card block_5 data-catalog-level" 
            data-catalog_00="${data[4].catalog[0]}" 
            data-catalog_01="${data[4].catalog[1]}"  
            data-catalog_02="${data[4].catalog[2]}" 
            data-level_catalog="1000"
            data-id="${data[4].id}"
                >
                <!-- 5  -->
                <div class="bestdeals_main-card__sale"><span>Save 10%</span></div>
                <p class="bestdeals_main-card__offer special_offer"><span>Special</span> Offer
                </p>
                <a href="${PRODUCTHTML}"  class="bestdeals_main-card__img-wrapp">
                    <img class="product-img" src="${data[4].images[0].img} " alt="${data[4].images[0].alt}"
                        class="bestdeals_main-card__img">
                </a>
                <a href="${PRODUCTHTML}" class="bestdeals_main-card__name">${data[4].title.replace(/Характеристики/g, "")}</a>
                <span class="bestdeals_main-card__newprise"><span class="valuta">UA</span> <span
                        class="cena">${data[4].newPrice}</span></span>
                <s class="bestdeals_main-card__oldprise"><span class="valuta">UA</span> <span
                        class="cena">${data[4].oldPrice}</span></s>
                <p class="bestdeals_main-card__already_available">
                    <span class="bestdeals_main-card__already">Already Sold: 6</span>
                    <span class="bestdeals_main-card__available">Available: 30</span>
                </p>
            </li>
    `

    if (cartListWrapper) cartListWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
}

export default generateCardsBestDeals;

