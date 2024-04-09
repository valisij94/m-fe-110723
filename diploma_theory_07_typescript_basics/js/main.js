"use strict";
/*
Написать функцию, которая будет принимать 3 аргумента: имя (строка), возраст (число), и семейное положение (boolean). Функция должна вернуть строку следующего вида: NAME is AGE years old and (not) married..
*/
function getStatus(name, age, isMarried) {
    return `${name} is ${age} years old, and${isMarried ? '' : 'not'} married`;
}
console.log(getStatus('Vasilij', 25, true));
/*
напишите функцию checkAccess. Она принимает имя (строку), и возраст (число), и возвращает boolean: истину если возраст больше 21, и ложь - если нет. При этом, вывести в консоль сообщение NAME is AGE years old, checking access.
*/
function checkAccess(name, age) {
    console.log(`${name} is ${age} years old, checking access..`);
    return age > 21;
}
console.log(checkAccess('Timon', 20));
function logThis(text) {
    console.log(text);
}
logThis('Something');
/*
Написать функцию greet, которая принимает в аргументах имя (строка), и просто выводит в консоль сообщение Hello, NAME!
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Pumba');
function myFunc(arg1, arg2) {
    console.log('something', arg1, arg2);
}
// myFunc(1); // Error
myFunc(1, '1'); // OK
// myFunc(1, '1', 1); // Error
function myFunc2(arg1, arg2 = 'timon') {
    console.log('something', arg1, arg2);
}
myFunc2(1); // OK - we have the default value
myFunc2(1, '1'); // OK
// myFunc2(1, '1', 1); // Error
function myFuncWithNonMandatoryArgs(arg1, arg2) {
    console.log('something', arg1, arg2);
}
myFuncWithNonMandatoryArgs(1); // OK - the second argument is optional
myFuncWithNonMandatoryArgs(1, '1'); // OK
// myFuncWithNonMandatoryArgs(1, '1', 1); // Error
const arr = [1, 2, 3];
const arrOfStrings = ['1', '2', '3'];
const arrOfArray = [[1, 2, 3], [1, 2, 4]];
/*
Написать функцию getSum, которая будет принимать массив чисел, и возвращать сумму его элементов.
*/
function getSum(array) {
    return array.reduce((acc, val) => acc + val, 0);
}
console.log(getSum(arr));
//# sourceMappingURL=main.js.map