// Подопытные данные
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


/*2. Пишем в JS функцию `fillProfuctForm` - она примет объект с данными товара, и должна заполнить данные формы.*/
const nameInput = document.querySelector('#productName');
const priceInput = document.querySelector('#productPrice');
const categoryInput = document.querySelector('#productCategory');
const descriptionInput = document.querySelector('#productDescription');

function fillProductForm(product) {
    nameInput.value = product.name;
    priceInput.value = product.price;
    categoryInput.value = product.category;
    descriptionInput.value = product.description;
}

fillProductForm(products[0]);

/*
3. Пристрелочная задача на добавление DOM-элементов средствами JS. Добавить в форму кнопку "Отмена". */
const newProductForm = document.querySelector('#newProductForm');
const cancelBtn = document.createElement('button');
cancelBtn.textContent = "Cancel";
newProductForm.append(cancelBtn);

/* На кнопку Cancel добавить обработчик - выводить в консоль сообщение "Кнопка Отмена нажата" */
// cancelBtn.onclick = (event) => {
//     event.preventDefault();
//     console.log('Simple click handler');
// };

// cancelBtn.onclick = (event) => {
//     event.preventDefault();
//     console.log('Simple click handler 2');
// };

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('The Cancel button is pressed');
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('The Cancel button is pressed 2');
});