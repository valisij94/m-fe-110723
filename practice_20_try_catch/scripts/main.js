/* 1. Пристрелочная. Написать функцию `smartSqrt` - она принимает на вход аргумент. Если аргумент больше либо равен 0 - то возвращает его квадратный корень. Иначе - нужно сгенерировать свое исключение с текстом "Не удалось извлечь квадратный корень!".
*/

const smartSqrt = (num) => {


    if (num < 0) {
        throw new Error("Failed to get sqrt!");
    }
    return Math.sqrt(num);
}

/*
2. Вызвать написанную функцию для аргумента -9. Перехватить ошибку, и вывести в консоль сообщение ошибки.
*/
try {
    smartSqrt(-9);
}
catch (error) {
    console.log(error.message);
}

console.log('After dangerous place')

/*
3. У нас есть функция `jsonRequest`, которая обращается к бэку. Нужно рассмотреть нештатные ситуации. В случае, если свойство `ok` ответа сервера не `true` - нам нужно сгенерировать пользовательское исключение с текстом "Что-то пошло не так!".
*/

async function jsonRequest(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const jsonResult = await response.json();
    return jsonResult;
}

async function fetchData() {
    try {
        await jsonRequest('https://dummyjson.com/products1');
    }
    catch (err) {
        console.log('ERRROR!')
    }
    console.log('final')
}

fetchData();
console.log('something after')
