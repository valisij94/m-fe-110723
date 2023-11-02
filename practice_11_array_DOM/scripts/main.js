// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

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


/* 1. Вспоминаем работу с методами массивов. У нас есть массив объектов `products` Нужно получить из него массив названий товаров. Решить задачу двумя способами: через `map`, и через `reduce`.
*/

const productNames = products.map( (product) => product.name );
//console.log('From map', productNames);

const productNamesFromReduce = products.reduce(
    (accum, product) => {
        accum.push(product.name);
        return accum;
    },
    []
);
//console.log('From reduce', productNamesFromReduce)

/* 2. Из массива строк, получить объект, в котором ключами будут сами строки, а значениями - длины этих строк. */

const myObj = {
    prop1: 'value1',
    prop2: 'value2'
}

const val = myObj.prop1;
let myVar = 'prop2';

const val2 = myObj[ myVar ]; // myObj.prop2


const stringsObject = strings.reduce(
    ( accum, str ) => {
        accum[str] = str.length;
        return accum;
    },
    {}
);
console.log(stringsObject);

/* 3. Из массива чисел получить объект, который будет содержать 2 свойства: `even`, `odd`. Оба свойства - массивы. В первом массиве должны быть нечетные числа из исходного массива, а во втором - четные. */

const evenOddNumbers = numbers.reduce(
    (accum, value) => {
        if (value % 2 === 0) {
            accum.even.push(value);
        }
        else {
            accum.odd.push(value);
        }
        return accum;
    },
    {
        even: [],
        odd: []
    }
)

console.log(evenOddNumbers)

/* 4. Из массива объектов `products`, получить массив, который содержит уникальные категории товаров. НЕ использовать Set!
*/
const uniqueCategories = products.reduce(
    (accum, product) => {
        const cat = product.category;
        if (!accum.includes(cat)) {
            accum.push(cat);
        }
        return accum;
    },
    []
)

console.log(uniqueCategories);