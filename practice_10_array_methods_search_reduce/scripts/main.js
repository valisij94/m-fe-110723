// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

/* Дан массив чисел. Вывести в консоль массив, состоящий только из нечетных элементов исходного массива. */
const filteredArray = numbers.filter( el => el % 2 !== 0);
console.log(filteredArray);

/*  - Поиск товаров по категории. Дан массив товаров. Вывести в консоль массив из товаров, у которых категория - "Tools". */
const toolsProducts = products.filter( product => product.category === 'Tools' );
console.log(toolsProducts);

/*  - Поиск уцененных инструментов. Дан массив товаров. Вывести в консоль массив из товаров, на которые есть скидка (т.е. присутствует флаг discount), и которые относятся к категории "Инструменты". */
function isDiscounted(product) {
    return product.discount && product.category === 'Tools';
}
const discountedTools = products.filter( isDiscounted );
console.log(discountedTools);

/*  - Реализовать свой filter. */

function filter(array, callback) {
    // ...
};

const arr = [1,2,3,4,5];
function myFilter(el) {
    return el % 2 === 0;
}
filter(arr, myFilter); // [2, 4]

/*  - найти в массиве чисел первое число, кратное 3. */
const firstNum = numbers.find(el => el % 3 === 0);
console.log(firstNum);

/*  - найти в массиве чисел индекс первого числа, кратного 5. */
const firstIndex = numbers.findIndex( el => el % 5 === 0 );
console.log(firstIndex);

/* найти в массиве строк первую строку, длина которой - 5 символов */
const firstString = strings.find( str => str.length === 5 );
console.log(firstString);

/* найти индекс первого товара в массиве товаров, чья цена больше 200. */
const firstProductIndex = products.findIndex( prod => prod.price > 200 );
console.log(firstProductIndex);

/*  - Отсортировать массив строк `strings` по возрастанию. */
strings.sort();
console.log(strings);

/*  - Отсортировать массив чисел `numbers` по убыванию. */
numbers.sort( (a,b) => b - a );
console.log(numbers);

/* - Отсортировать массив объектов `products` по возрастанию цены. */
products.sort( (prod1, prod2) => prod1.price - prod2.price );
console.log(products);

/*  - получить сумму элементов массива numbers */
const result = numbers.reduce( (acc, val) => {
    return acc + val;
}, 0);
// 1 iteration: acc = 0, val = 1 (the 1st elem of "numbers" array)
// The end of 1iteration: acc = 0 + 1 = 1; val = 1
// 2 iteration: acc = 1 (the result of the 1st iteration), val = 3 (2nd elem of numbers array)
// The end of 2iteration: acc = 1 + 3 = 4; val = 3;
// ...
console.log('Sum: ', result)

/*  - получить суммарную стоимость всех товаров массива `products` */
const productsSum = products.reduce( (acc, val) => {
    return acc + val.price;
}, 0);
console.log('Total price is: ' + productsSum);