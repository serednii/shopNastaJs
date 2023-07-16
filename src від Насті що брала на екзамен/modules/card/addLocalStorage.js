import { removeMessage } from "./addRemoveMessage";
import cardShablon from "./cardShablon";
import countCartAndIcon from "./countCartAndIcon";
import totalPrice from "./totalPrice";


export function addLocalStorage(productInfo, cart) {
    // console.log(productInfo)
    // console.log(productInfo.id)

    let localSt = JSON.parse(localStorage.getItem(cart));
    // console.log(localSt)
    if (Array.isArray(localSt)) {
        if (localSt.find(e => e.id === productInfo.id)) {//якщо товар є в локал сторедж то видаляємо
            // console.log("ok")
            localSt = localSt.filter(e => e.id !== productInfo.id)
            // console.log(localSt)//Відфільтровуємо тільки ті які не співпадають
        } else {
            localSt.push(productInfo);
        }
        localStorage.setItem(cart, JSON.stringify(localSt));
        // console.log(JSON.parse(localStorage.getItem('cart')))

        // console.log(JSON.parse(localStorage.getItem('cart')));
    } else {
        // console.log("false")
        const arr = [productInfo];
        // console.log(arr);
        localStorage.setItem(cart, JSON.stringify(arr));
        // console.log(JSON.parse(localStorage.getItem('cart')));
    }
}


export function stratLocalStorage(classs, cart) {
    // .cart_list__cart
    // .cart_list__likes
    // console.log(`${classs}.cart_list__list`);

    const cartListWrapper = document.querySelector(`${classs} .cart_list__list`);//Вся карточка корзини
    // console.log(cartListWrapper);

    let localSt = JSON.parse(localStorage.getItem(cart));
    // console.log(localSt)
    if (Array.isArray(localSt)) {

        if (localSt.length > 0) {
            removeMessage(cartListWrapper);
        }
        localSt.forEach(e => {
            // console.log(e.id);
            // console.log(e)

            cart === 'cart' && document.querySelector(`[data-id="${e.id}"]`) &&
                document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_card]') &&
                (document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_card]').innerText = "Remove to cart")

            cart === 'likes' && document.querySelector(`[data-id="${e.id}"]`) &&
                document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_like]') &&
                (document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_like]').classList.add('add_card'))

            // console.log(document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_card]'))



            cardShablon(cartListWrapper, e);
        })
        // Собранные данные подставим в шаблон для товара в корзине

        totalPrice();
        countCartAndIcon(classs);

    }
}




