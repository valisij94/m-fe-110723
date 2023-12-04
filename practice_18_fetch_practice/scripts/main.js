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


/*
2. Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же.

- создать ДОМ-элемент select
- добавить его в разметку ПЕРЕД div.productsContainer
- сделать запрос к бэку
- когда получен ответ - пройтись по массиву категорий, создать option-ы, и добавить их в селект
*/


const categoriesSelect = document.createElement('select');
const mainContainer = document.querySelector('main');
mainContainer.prepend(categoriesSelect);

fetch(`https://fakestoreapi.com/products/categories`)
    .then(response => {
        return response.json()
    })
    .then((result) => {
        result.forEach( category => {
            const optionEl = document.createElement('option');
            optionEl.value = category;
            optionEl.textContent = category;
            categoriesSelect.append(optionEl);
        });
    });

    /*
    3. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://fakestoreapi.com/products/category/CATEGORY`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.productsContainer`).  ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим с помощью функции `renderProduct`, она умеет создавать DOM-элемент, но нужно его еще добавить в контейнер.
    */


const productsContainer = document.querySelector('.productsContainer');

function getProducts(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => {
        return response.json()
    })
    .then((result) => {
        productsContainer.innerHTML = '';
        result.forEach( product => {
            const proudctEl = renderProduct(product);
            productsContainer.append(proudctEl);
        });
    });
}

getProducts('electronics')