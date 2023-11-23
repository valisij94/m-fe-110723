// Источник данных
const products = [
    {
        name: "Ball",
        category: "Sport",
        img: "./assets/ball.jpeg",
        price: 100,
        description: 'Just the simple ball'
    },
    {
        name: "Gloves",
        category: "Sport",
        img: "./assets/gloves.jpg",
        price: 140,
        description: 'Tactical gloves'
    },
    {
        name: "Sport shoes",
        category: "Sport",
        discount: true,
        img: "./assets/shoes.png",
        price: 320,
        description: 'Sport shoes. The best choice for running'
    },
    {
        name: "Hammer",
        category: "Tools",
        img: "./assets/hammer.jpeg",
        price: 40,
        description: 'The best way to convince somebody that you are right.'
    },
    {
        name: "Saw",
        category: "Tools",
        discount: true,
        img: "./assets/saw.jpeg",
        price: 75,
        description: 'This will help you in case the hammer could not convince your companion'
    },
    {
        name: "Shark toy",
        category: "Other",
        img: "./assets/shark.jpeg",
        price: 45,
        description: 'From IKEA with love'
    },
    {
        name: "Truck",
        category: "Other",
        img: "./assets/truck.jpeg",
        price: 80,
        description: 'Truck. Nothing more.'
    }
];

const productsContainer = document.querySelector('.productsContainer');

function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

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

function renderProductList(products) {
  productsContainer.innerHTML = '';
  products.forEach( product => {
      const renderedProduct = renderProduct(product);
      productsContainer.append(renderedProduct);
  });
}

/*
1. Делаем подготовку к "изменению темы" нашей страницы. Средствами JS, добавляем на страницу (в `main.mainContainer`) выпадающий список (`select`), с двумя опциями, для светлой и темной тем соответственно.
 - создаем средствами JS выпадающий список (`createElement`)
 - создаем опции выпадающего списка. Значения (`value`) опций - `light`, `dark` соответственно
 - добавляем опции в список (через `append`)
 - добавляем список на страницу
 */

// создаем ДОМ-элементы
const selectEl = document.createElement('select');
const optionLightEl = document.createElement('option');
const optionDarkEl = document.createElement('option');
// добавляем значения и тексты для опций
optionDarkEl.value = 'dark';
optionDarkEl.textContent = 'Dark Theme';
optionLightEl.value = 'light';
optionLightEl.textContent = 'LightTheme';
// добавляем все на страницу
selectEl.append(optionLightEl, optionDarkEl);
const mainContainer = document.querySelector('.mainContainer');
mainContainer.append(selectEl);

/* 2. Добавляем обработчик события выбора в списке (`change`). При выборе, нужно выводить в консоль `value` выбранной опции.
*/
selectEl.addEventListener('change', (event) => {
    console.log('Select event', event.target.value);
})

/*
3. Реализуем изменение темы. Классы для темы уже созданы в стилях, это `themeLight`, `themeDark`. Тему нужно применять как класс к `body`. То есть, если выбран `light`, то нужно применть к `body` класс `themeLight`, и удалить стиль `themeDark`. И наоборот.
*/
document.body.classList.add('themeLight');

selectEl.addEventListener('change', (event) => {
    if (event.target.value === 'light') {
        document.body.classList.add('themeLight');
        document.body.classList.remove('themeDark');
    }
    else {
        document.body.classList.remove('themeLight');
        document.body.classList.add('themeDark');
    }
})

/*
4. Теперь поработаем с событиями инпутов. Средствами JS, добавляем на страницу инпут - это будет инпут для поиска товаров по названию. Добавим ему плейсхолдер и также добавить класс `input`. Нам нужно, чтобы при изменении инпута (когда мы что-то в нем вводим), мы бы перерисовывали список товаров так, чтобы были видны только те товары, названия которых содержат то, что введено в инпуте. Шаги решения:
 - добавляем инпут
 - добавляем на него обработчик события ввода в инпут
 - в обработчике, нам нужно проверить, введено ли что-нибудь в инпуте. Если да - тогда фильтруем список товаров (`products`), и результат рендерим с использованием функции `renderProductList`. А если нет - то рендерим исходный список товаров.
*/
const searchInputEl = document.createElement('input');
searchInputEl.classList.add('input');
searchInputEl.placeholder = 'Search...';
mainContainer.append(searchInputEl);

searchInputEl.addEventListener('input', (event) => {
    let productsResult = products;
    if (!!event.target.value) {
        productsResult = products.filter( prod => prod.name.toLowerCase().includes(event.target.value.toLowerCase()));
    }
    renderProductList(productsResult);
});

/*
5. Теперь закрепим работу с событиями инпутов. Средствами JS, добавляем на страницу еще 2 инпута. Это будет фильтр по цене (от/до), и кнопку "Поиск". Инпутам даем класс `input`. Нужно, чтобы наши инпуты "не разрешали" ввода нечисловых значений. Как это сделать:
 - нужно контролировать результат ввода после ухода фокуса из инпута (событие `blur`)
 - если в инпуте ничего не введено (пусто) - это нормальная ситуация
 - если в инпуте введено нечто, что не является числом (проверяем как `Number.parseInt(value) !== NaN`) - то ставим фокус в этот инпут, и применяем к нему класс `errorInput`.
 - если в инпуте все в порядке - убираем с него клас `errorInput`.
 */

const priceFrom = document.createElement('input');
priceFrom.classList.add('input');
priceFrom.placeholder = 'от';
mainContainer.append(priceFrom);

const priceTo = document.createElement('input');
priceTo.classList.add('input');
priceTo.placeholder = 'до';
mainContainer.append(priceTo);

function blurHandler(event) {
    if (!!event.target.value) {
        if (!Number.isNaN(Number.parseInt(event.target.value))) {
            event.target.classList.remove('errorInput');
        }
        else {
            event.target.focus();
            event.target.classList.add('errorInput');
        }
    }
    else {
        event.target.classList.remove('errorInput');
    }
}

priceFrom.addEventListener('blur', blurHandler);

priceTo.addEventListener('blur', blurHandler);