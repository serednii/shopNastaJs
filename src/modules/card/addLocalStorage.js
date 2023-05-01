import { removeMessage } from "./addRemoveMessage";
import cardShablon from "./cardShablon";
import countCartAndIcon from "./countCartAndIcon";
import totalPrice from "./totalPrice";


export function addLocalStorage(productInfo, cart) {

    let localSt = JSON.parse(localStorage.getItem(cart));
    if (Array.isArray(localSt)) {
        if (localSt.find(e => e.id === productInfo.id)) {//якщо товар є в локал сторедж то видаляємо
            localSt = localSt.filter(e => e.id !== productInfo.id)
        } else {
            localSt.push(productInfo);
        }
        localStorage.setItem(cart, JSON.stringify(localSt));
    } else {
        const arr = [productInfo];
        localStorage.setItem(cart, JSON.stringify(arr));
    }
}


export function stratLocalStorage(classs, cart) {

    const cartListWrapper = document.querySelector(`${classs} .cart_list__list`);//Вся карточка корзини

    let localSt = JSON.parse(localStorage.getItem(cart));
    if (Array.isArray(localSt)) {

        if (localSt.length > 0) {
            removeMessage(cartListWrapper);
        }
        localSt.forEach(e => {

            cart === 'cart' && document.querySelector(`[data-id="${e.id}"]`) &&
                document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_card]') &&
                (document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_card]').innerText = "Remove to cart")

            cart === 'likes' && document.querySelector(`[data-id="${e.id}"]`) &&
                document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_like]') &&
                (document.querySelector(`[data-id="${e.id}"]`).querySelector('[data-btn_like]').classList.add('add_card'))
            cardShablon(cartListWrapper, e);
        })
        totalPrice();
        countCartAndIcon(classs);

    }
}




