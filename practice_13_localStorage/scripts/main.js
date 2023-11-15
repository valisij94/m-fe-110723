// Здесь может быть Ваша реклама!

/*
1. Отработка взаимодействия с localStorage
- реализовать сохранение в localStorage ключа test, и значения 100.
- реализовать получение ключа test из localStorage, и вывод его в консоль.
- очистить ключ test в localStorage.
*/

localStorage.setItem('test', 100);
const item = localStorage.getItem('test');
console.log(item);
localStorage.removeItem('test');

/*
2. Реализовать запоминание времени первого посещения сайта, и вывод его в консоль. То есть, на событие загрузки документа добавить обработчик, который:
 - проверит наличие в localStorage ключа `firstEnter`.
 - если его нет - запомнит в localStorage значение текущего времени (использовать конструкцию `let firstEnter = Date.now();`), с ключом `firstEnter`.
 - если такой ключ есть - вывести его в консоль.
*/

document.addEventListener('DOMContentLoaded', (event) => {
  let firstEnter = localStorage.getItem('firstEnter');
  if (firstEnter) {
    console.log(firstEnter);
  }
  else {
    localStorage.setItem('firstEnter', Date.now());
  }
});

/*
3. Реализовать сохранение значения инпута в localStorage, а именно:
 - средствами JS добавить в `main.mainContainer`, инпут.
 - на инпут, на событие потери фокуса, добавить обработчик, который сохранит в localStorage значение инпута (использовать ключ inputValue)
 - на событие загрузки документа, добавить обработчик, который проверит наличие в localStorage ключа inputValue. Если такой имеется - то его значение записать в инпут.
 */

const mainContainer = document.querySelector('main.mainContainer');
const simpleInput = document.createElement('input');
mainContainer.append(simpleInput);

simpleInput.addEventListener('blur', (event) => {
  // Значение из инпута берем так:
  const inputVal = event.target.value;
  localStorage.setItem('inputValue', inputVal);
});

document.addEventListener('DOMContentLoaded', (event) => {
  const inputValue = localStorage.getItem('inputValue');
  if (inputValue) {
    simpleInput.value = inputValue;
  }
});

/*
4. Верстка формы обратной связи. От нас требуется с помощью JS (методами работы с DOM), создать и добавить на страницу форму обратной связи. Предполагается, что форма имеет следующие поля:
   - фамилия
   - имя
   - емейл
   - телефон
   - кнопка "Отправить"
   - кнопка "Отмена"
*/

function renderContactsForm() {
  const formEl = document.createElement('form');
  const lastnameEl = document.createElement('input');
  const firstnameEl = document.createElement('input');
  const emailEl = document.createElement('input');
  const phoneEl = document.createElement('input');
  lastnameEl.placeholder = 'Lastname';
  firstnameEl.placeholder = 'Fristname';
  emailEl.placeholder = 'Email';
  phoneEl.placeholder = 'Phone';
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  formEl.append(lastnameEl, firstnameEl, emailEl, phoneEl, submitBtn, cancelBtn);
  mainContainer.append(formEl);

  firstnameEl.addEventListener('change', (event) => {
    localStorage.setItem('nameInput', event.target.value);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const nameVal = localStorage.getItem('nameInput');
    if (nameVal) {
      firstnameEl.value = nameVal;
    }
  });
}

renderContactsForm();

/* 5. Обеспечение сохранения имени пользователя при обновлении страницы, и при показе формы, если значение указано - заполняем соответствующий инпут.
*/
