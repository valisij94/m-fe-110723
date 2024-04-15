let firstTuple: [number, boolean, string];
firstTuple = [5, true, 'Просто строка'];

firstTuple.forEach( ( el ) => {
  console.log(el);
})

firstTuple.push(5); // Ok
firstTuple.push('timon'); // Ok

/*
Создать переменную tuple, и записать в нее кортеж из двух чисел, строки, числа, и логического значения.
*/
let tuple: [number, number, string, number, boolean] = [1,2,'Timon',3, true];


/*
Создать функцию makeNumTuple, которая примет 2 числа, и вернет кортеж из этих двух чисел.
*/
function makeNumTuple(num1: number, num2: number): [number, number] {
  return [num1, num2];
}

/*
Создать функцию, makeComplicatedTuple которая примет 2 числа, и вернет кортеж из двух элементов. Первый элемент - сумма двух чисел. Второй - конкатенация преобразованных в строки чисел.
*/
function makeComplicatedTuple(num1: number, num2: number): [number, string] {
  return [ num1 + num2, `${num1}${num2}`];
}

console.log(makeComplicatedTuple(1, 2));

// Объединение типов
let myVar: number | string;
myVar = 5; // Ok
myVar = 'Timon'; // Ok
// myVar = {}; // Error

/*
Создать переменную, в которую можно писать число, строку, или логическое значение.
*/
let newVar: number | string | boolean;
newVar = 5;
newVar = '5';
newVar = true;
// newVar = {};

/*
Написать функцию simpleConversion, которая принимает один аргумент. Этот аргумент может быть числом или строкой. Если аргумент - число (typeof поможет с проверкой типа) - то функция должна выводить в консоль This is number!. Иначе - выводить строку This is a string!.
*/

function simpleConversion(arg: number | string): void {
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
function mixedAdd(numOne: number | string, numTwo: number | string): number | string {
  if (typeof numOne === 'number' && typeof numTwo === 'number') {
    return numOne + numTwo;
  } else {
    return `${numOne} ${numTwo}`;
  }
}

console.log('MixedAdd numbers', mixedAdd(5,5)); // 10
console.log('MixedAdd string', mixedAdd(5, '5')); // string 55

// Определяем свой тип
type StringNumber = number | string;

type AllowedValues = 18 | 21 | 25;
type AccountTypes = 'basic' | 'advanced' | 'premium';
let myAccountType: AccountTypes;
myAccountType = 'premium';
// myAccountType = 'super'; // Error

function newMixedAdd(numOne: StringNumber, numTwo: StringNumber): StringNumber {
  if (typeof numOne === 'number' && typeof numTwo === 'number') {
    return numOne + numTwo;
  } else {
    return `${numOne} ${numTwo}`;
  }
}
console.log('NewMixedAdd numbers', mixedAdd(5,5)); // 10
console.log('NewMixedAdd string', mixedAdd(5, '5')); // string 55

/*
Создать свой тип CustomType, который может быть строкой, числом, или логическим значением.
*/
type CustomType = number | string | boolean;

/*
Написать функцию, которая принимает аргумент типа CustomType. Если аргумент - число, то выводит квадрат числа. Если логический - то просто выводит аргумент в консоль. Если строка - выводит длину строки.
*/
function myFunction(arg: CustomType): void {
  if (typeof arg === 'number') {
    console.log(arg * arg);
  } else if (typeof arg === 'string') {
    console.log(arg.length);
  } else {
    console.log(arg);
  }
}

myFunction(5);
myFunction('timon');
myFunction(true);

/*
Создать свой тип PersonData. Это должен быть кортеж (tuple), в котором первым элементом будет ФИО (строка), вторым - возраст (число), и третьим - семейное положение (логический).
*/

type PersonData = [string, number, boolean];