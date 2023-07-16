
import { PRODUCTHTML } from '../GlobalVariable';

function generateCards(data, clases, count) {
    const cartListWrapper = document.querySelector(clases);
    // console.log(data[0].images[0].alt)
    // console.log(data[0].images[0].img)

    for (let i = 0; i < count; i++) {
        const cartItemHTML = ` <li class="card collect_data data-catalog-level" 
        data-catalog_00="${data[i].catalog[0]}" 
        data-catalog_01="${data[i].catalog[1]}"  
        data-catalog_02="${data[i].catalog[2]}" 
        data-level_catalog="1000"
        data-id="${data[i].id}"
        >
        <div class="heart_wrap data-click-card" data-btn_like data-cart="cart_list__likes" >
        <button class="catalog_product-heart-button">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                    fill="black" />
            </svg>
        </button>
    </div>
    <a href="#" class="card__name">${data[i].title.replace(/Характеристики/g, "")}</a>
    <div class="card__img-wrapper">
        <a href="${PRODUCTHTML}" class="card__img"><img class="product-img" src="${data[i].images[0].img} " alt="${data[i].images[0].alt}"></a>
    </div >
    <div class="card__price">
        <s class="card__price-old"><span class="valuta">UA</span> <span
                class="cena">${data[i].oldPrice}</span></s>
        <span class="card__price-sale"><span class="valuta">UA</span> <span class="cena">${data[i].newPrice}</span></span>
    </div>
    <button class="btn data-click-card" data-btn_card  data-cart="cart_list__cart" >Add to cart</button>

</li > `
        if (cartListWrapper) cartListWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
}

export default generateCards;