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