"use strict";
let firstTuple;
firstTuple = [5, true, 'Просто строка'];
firstTuple.forEach((el) => {
    console.log(el);
});
firstTuple.push(5); // Ok
firstTuple.push('timon'); // Ok
/*
Создать переменную tuple, и записать в нее кортеж из двух чисел, строки, числа, и логического значения.
*/
let tuple = [1, 2, 'Timon', 3, true];
/*
Создать функцию makeNumTuple, которая примет 2 числа, и вернет кортеж из этих двух чисел.
*/
function makeNumTuple(num1, num2) {
    return [num1, num2];
}
/*
Создать функцию, makeComplicatedTuple которая примет 2 числа, и вернет кортеж из двух элементов. Первый элемент - сумма двух чисел. Второй - конкатенация преобразованных в строки чисел.
*/
function makeComplicatedTuple(num1, num2) {
    return [num1 + num2, `${num1}${num2}`];
}
console.log(makeComplicatedTuple(1, 2));
// Объединение типов
let myVar;
myVar = 5; // Ok
myVar = 'Timon'; // Ok
// myVar = {}; // Error
/*
Создать переменную, в которую можно писать число, строку, или логическое значение.
*/
let newVar;
newVar = 5;
newVar = '5';
newVar = true;
// newVar = {};
/*
Написать функцию simpleConversion, которая принимает один аргумент. Этот аргумент может быть числом или строкой. Если аргумент - число (typeof поможет с проверкой типа) - то функция должна выводить в консоль This is number!. Иначе - выводить строку This is a string!.
*/
function simpleConversion(arg) {
    if (typeof arg === 'number') {
        console.log('This is a number!');
    }
    else {
        console.log('This is a string!');
    }
}
simpleConversion(5);
simpleConversion('5');
/*
Написать функцию mixedAdd. Она принимает 2 аргумента, каждый из которых может быть строкой или числом. Функция должна вернуть сумму чисел, если оба аргумента - числа. А если хотя бы один аргумент - строка, то функция должна вернуть конкатенацию аргументов, разделенную пробелом.
*/
function mixedAdd(numOne, numTwo) {
    if (typeof numOne === 'number' && typeof numTwo === 'number') {
        return numOne + numTwo;
    }
    else {
        return `${numOne} ${numTwo}`;
    }
}
console.log('MixedAdd numbers', mixedAdd(5, 5)); // 10
console.log('MixedAdd string', mixedAdd(5, '5')); // string 55
let myAccountType;
myAccountType = 'premium';
// myAccountType = 'super'; // Error
function newMixedAdd(numOne, numTwo) {
    if (typeof numOne === 'number' && typeof numTwo === 'number') {
        return numOne + numTwo;
    }
    else {
        return `${numOne} ${numTwo}`;
    }
}
console.log('NewMixedAdd numbers', mixedAdd(5, 5)); // 10
console.log('NewMixedAdd string', mixedAdd(5, '5')); // string 55
/*
Написать функцию, которая принимает аргумент типа CustomType. Если аргумент - число, то выводит квадрат числа. Если логический - то просто выводит аргумент в консоль. Если строка - выводит длину строки.
*/
function myFunction(arg) {
    if (typeof arg === 'number') {
        console.log(arg * arg);
    }
    else if (typeof arg === 'string') {
        console.log(arg.length);
    }
    else {
        console.log(arg);
    }
}
myFunction(5);
myFunction('timon');
myFunction(true);
//# sourceMappingURL=main.js.map