
export async function getZaprosFunction(url = "", type = "category", arrCatalogs = [], generateCards, classs, count) {
    const urlSearch = url + allDataSearch(type, arrCatalogs)
    // console.log(urlSearch);
    fetch(urlSearch)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const _data = transformData(data);
            // console.log(_data)
            generateCards(_data, classs, count);
            return _data;
        })
}


export async function getZapros(url = "", type = "category", arrCatalogs = []) {


    const urlSearch = url + allDataSearch(type, arrCatalogs)
    // console.log(urlSearch);
    let response = await fetch(urlSearch)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })

    return response.json()
    // fetch(urlSearch)
    //     .then(response => response.json())
    //     .then(data => {
    //         const _data = transformData(data);
    //         // console.log(_data);
    //         // generateCards(data, classs, count);
    //         // return transformData(data);
    //         return _data;
    //     })
}
export async function getZaprosAll(url = "", data = "") {
    if (data === "") return {};
    const urlSearch = url + 'filter=' + data
    console.log(urlSearch);
    let response = await fetch(urlSearch)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })

    return response.json()
    // fetch(urlSearch)
    //     .then(response => response.json())
    //     .then(data => {
    //         const _data = transformData(data);
    //         // console.log(_data);
    //         // generateCards(data, classs, count);
    //         // return transformData(data);
    //         return _data;
    //     })
}

// async function getZapros() {
//     let rez = await fetch(urlJsonServer)
//     rez = rez.json();
//     // rez = transformData(rez);
//     return rez;
// }


// *******************************************************
export function transformData(data) {

    let dataObject = data.map(e => {
        const _e = Object.assign({}, e);
        if (typeof e.category === 'string') _e.catalog = e.category.split(" ");
        if (typeof _e.images === 'string') _e.images = JSON.parse(_e.images);
        if (typeof e.parameters === 'string') JSON.parse(e.parameters).forEach(p => {
            const temp = Object.entries(p);
            _e[temp[0][0]] = temp[0][1];
        });
        delete _e.parameters;
        delete _e.category;
        return _e;
    })
    return dataObject;
}
// console.log(dataObject);

// *******************************************************

export function allDataSearch(type = "", data = []) {

    let stringSearch = "";
    data.forEach(e => {
        stringSearch += `filter-${type}=${e}/`;
    })

    return stringSearch;
}

// console.log(allDataSearch('category', ['Для_тварин', 'Собаки', 'Нашийники']))
