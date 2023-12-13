async function jsonRequest(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const jsonResult = await response.json();
    return jsonResult;
}


/*
1. Пристрелочная (вспоминаем промисы). Написать функцию `requestUrlGet`, которая принимает в аргументах адрес, к которому нужно обратиться. Она должна обратиться к адресу, принять результат, преобразовать его в JSON, и вернуть результат (готовый к использованию). ВАЖНО: использовать синтаксис промисов! Подсказка: функция должна вернуть промис, который в нужные момент будет зарезолвлен тем, с чем мы хотим работать дальше.
*/

/*
2. Добавляем в эту функцию обработку нештатных ситуаций. Рассмотреть случай, когда ответ сервера не-ок. В этом случае, нужно дать знать вызывающему коду, что что-то пошло не так. Подсказка: в случае с промисами, мы можем работать не через кидание ошибок.
*/

function requestUrlGet(url) {
    // 1. обратиться к адресу
    // 2. разобрать результат, преобразовать в JSON
    // 3. вернуть результат (сделать его доступным для вызывающего кода)
    const requestPromise = new Promise( (resolve, reject) => {
        fetch(url)
            .then( response => {
                if (!response.ok) {
                    reject(new Error('Something went wrong! ' + response.statusText));
                }
                return response.json();
            })
            .then( data => {
                resolve(data);
            })
            .catch( error => {
                reject(error);
            });
        });
    return requestPromise;
}

const res = requestUrlGet('https://dummyjson.com/products/categories1')
    .then(result => console.log(result));
