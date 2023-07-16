
function createCards(data) {
    data.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('show-info__card');
        card.innerHTML = `<li class="card">
        <h2 class="card__title">${element.cardTitle}</h2>
        <a href="#" class="card__name">${element.cardName}</a>
        <div class="card__img-wrapper">
            <a href="#" class="card__img"><img
                    src="${element.cardImg}"
                    alt="${element.cardImgAlt}"></a>
        </div>
        <div class="card__price">
            <s class="card__price-old"> ${element.cardValuta}  ${element.cardOldPrice}</s>
            <span class="card__price-sale">${element.cardValuta} ${element.cardNewPrice}</span>
        </div>
        <button class="btn">Add to cart</button>
    
    </li>
    `
        document.querySelector('.show-info').appendChild(card);
    });
}

export default createCards;