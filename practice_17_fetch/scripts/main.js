/*
1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение "Delayed message", через 5 секунд после запуска скрипта.
*/

// setTimeout( () => {
//     console.log('Delayed message');
// }, 5000);

/* 2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
*/

const main = document.querySelector('.mainContainer');

const timeInput = document.createElement('input');
const btnTimer = document.createElement('button');
btnTimer.textContent = "Start";

const cancelBtn = document.createElement('button');
cancelBtn.textContent = 'Cancel';
main.append(timeInput, btnTimer, cancelBtn);

cancelBtn.disabled = true;
let timerId;

btnTimer.addEventListener('click', () => {
    const timerValue = timeInput.value;
    if (!Number.isNaN(+timerValue)) {
        cancelBtn.disabled = false;
        timerId = setTimeout( () => {
            console.log('Delayed');
            cancelBtn.disabled = true;
        }, 1000 * timerValue);
    }
    else {
        console.log('Not a number')
    }
});

cancelBtn.addEventListener('click', () => {
    clearTimeout(timerId);
    cancelBtn.disabled = true;
});

/*
3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
 - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
 - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
 - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.
 */


 /*
 8. Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
 */

 const newPromise = new Promise( ( resolve, reject) => {
    setTimeout( () => {
        reject('Error')
        //resolve('Success!')
    }, 5000);
 });

 newPromise.then(
    (result) => { console.log(result) },
    (error) => { console.log(error) }
 )


 newPromise.then(
    (result) => { console.log(result) }
 )
 .catch( error => { console.log(error) } );
