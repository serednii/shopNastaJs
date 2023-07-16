import { PRODUCTHTML } from "../GlobalVariable";
// ***************************************************************************
function printCard(data, count, clases) {
    // const cartListWrapper = document.querySelector('.catalog_product-grid');
    const cartListWrapper = document.querySelector(clases);
    console.log(cartListWrapper);
    console.log(clases);
    console.log(data);

    console.log(count);

    if (!cartListWrapper) return
    const elements = cartListWrapper.querySelectorAll('.catalog_product-grid_cart');
    // console.log(elements)
    if (elements) {
        elements.forEach(e => e.remove());
    }
    // data = convertObjectToInArray(data, new Array())
    // console.log(data);
    // console.log(data.length);

    // console.log(count);

    // ((data.length - 1) > count ? count : (data.length - 1))
    // let begin = 0, end = 10;
    // if ((count * page + count) < (data.length - 1)) {
    //     begin = count * page;
    //     end = begin + count;
    // } else {
    //     // begin = (data.length-1) -
    //     // end = data.length-1
    // }

    for (let a = 0; a < ((data.length) > count ? count : (data.length)); a++) {
        let i = a;
        // console.log(`i = ${i}`)
        // console.log(`data[i]  = ${data[i]}`)
        // let i = Math.floor(Math.random() * data.length);
        // console.log(`a = ${a} -- ${i}`)
        const cartItemHTML = `<li class="catalog_product-grid_cart collect_data data-catalog-level" 
            data-catalog_00="${data[i].catalog[0]}" 
            data-catalog_01="${data[i].catalog[1]}"  
            data-catalog_02="${data[i].catalog[2]}" 
            data-level_catalog="1000"
            data-id="${data[i].id}"
            >
                <div class="catalog_product-grid_cart-box"></div>

                <div class="heart_wrap data-click-card" data-btn_like  data-cart="cart_list__likes">
                    <button class="catalog_product-heart-button">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                fill="black" />
                        </svg>
                    </button>
                </div>

                <a href="${PRODUCTHTML}" class="catalog_product__picture">
                    <img class="picture_1 product-img" src="${data[i].images[1].img}"
                        alt="${data[i].images[1].alt}">
                </a>
                <div class="catalog_product_content">
                    <a href="${PRODUCTHTML}" class="catalog_product-name--link">
                        ${data[i].title}
                    </a>

                    <div class="catalog_product__rating">
                        <a href="#">

                            <p class="star-rating" aria-label="4.5 stars out of 5">
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star " width="32" height="32" viewBox="0 0 32 32">
                                    <use xlink:href="#star" mask=url("#half")></use>
                                    <use xlink:href="#star"></use>

                                </svg>
                            </p>

                        </a>
                    </div>
                    <div class="catalog_product-prices">
                        
                    ${data[i].oldPrice !== 'null' ? `<div class="catalog_product-price--old">${data[i].oldPrice}<span
                                class="goods-tile__price-currency">₴</span></div>`: ""}

                         <div class="catalog_product-price--red ${data[i].oldPrice === 'null' ? "black-color" : ""}">
                            <p><span class="catalog_product-price-value cena">${data[i].newPrice}</span>
                                <span class="catalog_product-price-currency">₴</span>
                            </p>
                        </div>
                        <button class="btn catalog_product__cart data-click-card" data-btn_card data-cart="cart_list__cart" >
                        Add to cart
                        </button>
                    </div>


                </div>


            </li>
        `
        if (cartListWrapper) cartListWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
}
// ***************************************************************************

export default printCard;