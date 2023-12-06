function renderProduct(product){
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');

    productCard.addEventListener('click', (event) => {
        productCard.classList.toggle('productCardHighlighted');
    });

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.name;
    productTitle.classList.add('productTitle');

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    productPrice.classList.add('productPrice');

    const productCategory = document.createElement('p');
    productCategory.textContent = product.category;
    productCategory.classList.add('productCategory');

    const productImg = document.createElement('img');
    productImg.src = !!product.img ? product.img : '';
    productImg.classList.add('productImg');

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDescription.classList.add('productDescription');

    productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

    return productCard;
}

const productsContainer = document.querySelector('.productsContainer');
const categoriesSelect = document.createElement('select');
const mainContainer = document.querySelector('main');
mainContainer.prepend(categoriesSelect);

function renderCategories(categories) {
    categories.forEach( category => {
        const optionEl = document.createElement('option');
        optionEl.value = category;
        optionEl.textContent = category;
        categoriesSelect.append(optionEl);
    });
}

function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach( product => {
        productsContainer.append(renderProduct(product));
    });
}

function getProducts(category) {
    return new Promise((resolve, reject) => {
        const url = `https://fakestoreapi.com/products${category ? '/category/' + category : ''}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
        });
}

/* 1. Пристрелочная. Обратиться к адресу `https://fakestoreapi.com/products/categories`, за категориями товаров. Получив результат, вызвать функцию `renderCategories`, и передать ей результат в аргументе. Использовать синтаксис async/await.
*/

async function requestCategories() {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    const jsonData = await response.json();
    renderCategories(jsonData);
}

requestCategories();

/*2. У нас есть функция `getProducts`, она написана с использованием промисов. Переписать ее с использованием синтаксиса async/await.
*/

async function getProductsAsync(category) {
    const url = `https://fakestoreapi.com/products${category ? '/category/' + category : ''}`
    try {
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }
    catch (error) {
        console.log(error);
    }
}


// With then
const products = getProductsAsync('electronics');
console.log(products)
products.then( result => console.log('From then', result) );

// With async await
const wrapper = async () => {
    const productsResult = await getProductsAsync();
    console.log('From async await', productsResult)
}

wrapper();

/*
4. Пишем универсальную функцию отправки GET-запроса, которая будет возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.
*/

async function jsonRequest(url) {
    //  request URL
    // parse response as JSON
    // return parsed result
    try{
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }
    catch(error) {
        console.log('Something went wrong')
        throw error;
    }
}

const res = jsonRequest('https://fakestoreapi.com/products/category/jewelery')
    .then( resp => console.log(resp))
