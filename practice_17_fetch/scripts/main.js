/* 1. Вспоминаем промисы. Пишем функцию `promiseFactory`, которая вернет нам промис. Этот промис должен быть зарезолвлен текстом "Success" через 5 секунд.
*/
// function promiseFactory(timeout, success) {
//     console.log('New log')
//     return new Promise( (resolve) => {
//         console.log('Something')
//         setTimeout( () => {

//             resolve('Success');
//         }, 5 * 1000);
//     });
// }

/* 2. Дорабатываем функцию. Нужно, чтобы она принимала в аргументах время задержки `timeout` (в секундах), и флаг `success`. В зависимости от флага, нужно резолвить/отвергать промис через `timeout` секунд.
*/

function promiseFactory(timeout, success) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (success) {
                resolve('Success');
            }
            else {
                reject('Error');
            }
        }, timeout * 1000);
    });
}

/*
4. Обеспечить вывод в консоль текста "Will appear in all cases" после завершения/отвержения промиса (т.е. в любом случае). Тут нам поможет блок `finally`.
*/

// const newPromise = promiseFactory(2, false);
// newPromise
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) )
//     .finally( () => {
//         console.log('Will appear in all cases');
//     });

/* 5. Создадим с помощью нашей функции 2 промиса. Первый должен быть успешно зарезолвлен через 2 секунды, а второй - через 5 секунд. Нужно запустить их параллельно, и когда выполнятся ОБА промиса - вывести в консоль результаты.
*/

const pr1 = promiseFactory(2, true);
const pr2 = promiseFactory(5, true);

// Promise.all( [pr1, pr2] )
//     .then( res => console.log('All promises', res))
//     .catch( err => console.log('All promises error', err));

Promise.any( [pr1, pr2] )
    .then( res => console.log('Result from any', res));

/* 6. Теперь также запускам оба промиса, но нас интересует первый успешно завершенный - то есть, вывести в консоль только результаты того промиса, который будет зарезолвлен первым.
*/


/*
7. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://jsonplaceholder.typicode.com/posts` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с товарами.
*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => {
        console.log(response)
        return response.json()
    })
    .then( result => console.log(result));