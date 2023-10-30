// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

/* - добавить элемент в конец массива чисел (число 45); */
// const res = numbers.push(45);
// console.log(res);

/*  - добавить несколько элементов в конец массива чисел (числа 45, 68, 23);
*/
numbers.push(45,68,23);

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

// const newProduct = {
//     name: 'Name',
//     category: 'Sport',
//     img: '',
//     price: 50
// }

// console.log(products.push(newProduct));
// console.log(products);

/* удалить последний элемент из массива чисел. */
// const resPop = numbers.pop();

/*
  - добавить элемент в начало массива чисел (число 9)
  - удалить первый элемент из массива чисел
*/
// numbers.unshift(9);
// console.log('shifted numbers', numbers);
// numbers.shift();

/*   - получить "срез" массива чисел - это должен быть новый массив, который содержит элементы массива `numbers` со 2 по 5.
*/
// если берем по индексу
// const slicedArray = numbers.slice(2,6);
// если берем по порядковому номеру
// const nSlicedArray = numbers.slice(1,5);

/* - пройтись по массиву чисел, для каждого числа вывести, является ли оно четным. */
// numbers.forEach( (el) => {
//     if (el % 2 === 0) {
//         console.log(`${el} is even`)
//     }
//     else {
//         console.log(`${el} is odd`)
//     }
// });

/*   - пройтись по массиву строк, для каждой строки, если она меньше 4 символов, выводить `short`, иначе - `long`
*/
// strings.forEach( (str) => {
//     if (str.length < 4) {
//         console.log(`${str} is short`)
//     }
//     else {
//         console.log(`${str} is long`)
//     }
// });

/*   - пройтись по массиву товаров, вывести в консоль названия всех товаров */
// products.forEach( (elem) => {
//     console.log(elem.name);
// });

/*   - из массива чисел, получить новый массив, который будет содержать квадраты чисел */
const squares = numbers.map( (elem) => {
    return elem * elem;
});
console.log(squares)

/*
  - из массива строк получить новый массив, который будет содержать массив ОБЪЕКТОВ, у которых будут свойства:
     * value - сама строка
     * size - если длина строки меньше 4 символов, то `short`, иначе - `long`
     *
*/

const newArray = strings.map( (str) => {

    let nSize;
    if (str.length < 4) {
        nSize = 'short';
    }
    else {
        nSize = 'long'
    }

    let res = {
        value: str,
        size: nSize
    }
    return res;
})

console.log(newArray);