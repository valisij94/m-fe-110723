## Практическое занятие №14

### Тема: Повторение. Работа с localStorage.

Репозитарий содержит материалы по практическому занятию №14, посвященному повторению пройденного и работе с localStorage.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Вводная
В скрипте `main.js`, представлен массив с товарами. Это наш источник данных, считаем что мы получили его с бэка. Сам массив НЕ модифицируем - только создаем копии (или новые массивы на основе этого). Там также представлены функции `renderProduct`, `renderProductsList` - то есть функции отрисовки карточки товара и списка товаров. С этим сегодня будем работать.

### Задачи занятия
1. Добавляем фильтр по категории товара. На страницу (в HTML-разметке), нужно добавить выпадающий список (`select`). В `select`-е будут 4 опции (`option`) - Sport, Tools, Other, None. Значения (атрибут value) - такие же.
2. Пишем функцию `getFilteredProducts`. Она должна будет принять в аргументе категорию, и вернуть нам новый массив, который содержит товары только этой категории. Шаги решения:
 - создаем функцию
 - функция должна вернуть новый массив, который содержит только товары нужной категории, то есть отфильтрованный масив. Нам может помочь метод `filter`.
3. Добавляем обработчик события на `change` нашего списка из п.1. При событии, нам нужно взять выбранное значение (`value`), и отрисовать только товары этой категории. Если выбрана категория None - рисуем все товары (массив `products`).
 - вешаем обработчик события на селект
 - в обработчике, берем значение
 - если категория = None, то вызываем функцию renderProductsList с исходным массивом товаров (`products`)
 - если категория не None, то применяем функцию getFilteredProducts, с аргументом категории,
 - вызываем renderProductsList, в аргументах - результат предыдущего шага.
4. Теперь усложним задачу - добавим еще фильтрацию по названию. На страницу, под выпадающим списком, добавляем инпут для ввода условия отбора. В этом инпуте пользователь будет вводить наименование товара. Нам нужно также модифицировать функцию `getFilteredProducts` - теперь она будет принимать 2 аргумента, категорию и шаблон названия. И наша задача - вернуть массив, который содержит товары этой категории, иу которых название содержит шаблон названия (рекомендуется при проверке также приводить все к нижнему регистру).
5. Реализуем фильтрацию. Нам нужно изменить обработчик события `change` у нашего списка категорий, и добавить обработчик на событие изменения инпута (например, тоже `change`) - чтобы при наступлении этих событий, мы брали значения из инпута и селекта, и применяли фильтр.
6. Теперь реализуем сохранение условий поиска в localStorage. Сохранять нужно в виде ОБЪЕКТА с ключами name (значение инпута), и category (значение селекта). А на событие DOMContentLoaded добавим обработчик, который извлечет эти данные из localStorage, применит их к инпуту и селекту, и вызовет функцию фильтрации.
7. И теперь добавляем очистку фильтра - делаем кнопку, и добавляем на нее обработчик, который удалит из localStorage сохраненные данные фильтра.

### Полезные ссылки по занятию:
Подробный гайд по [localStorage](https://learn.javascript.ru/localstorage) - русскоязычный.
Статья с примерами по использованию [localStotage](https://habr.com/ru/articles/496348/) - тоже русскоязычная.
Информативное видео про [localStorage](https://www.youtube.com/watch?v=3-bZ7gLVSzo) - наглядно и с примерами.