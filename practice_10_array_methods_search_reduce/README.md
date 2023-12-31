## Практическое занятие №10

### Тема: Массивы. Некоторые методы массивов.

Репозитарий содержит материалы по практическому занятию №10, посвященному работе с массивами.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия
В процессе занятия, предполагается решение задач по работе с методами массивов, для тренировки и лучшего понимания. Занятие предполагает работу в консоли, с JavaScript.

1. Метод filter
 - Дан массив чисел. Вывести в консоль массив, состоящий только из нечетных элементов исходного массива.
 - Поиск товаров по категории. Дан массив товаров. Вывести в консоль массив из товаров, у которых категория - "Tools".
 - Поиск уцененных инструментов. Дан массив товаров. Вывести в консоль массив из товаров, на которые есть скидка (т.е. присутствует флаг discount), и которые относятся к категории "Инструменты".
 - Реализовать свой filter.
2. Методы поиска в массиве
 - найти в массиве чисел первое число, кратное 3.
 - найти в массиве чисел индекс первого числа, кратного 5.
 - найти в массиве строк первую строку, длина которой - 5 символов
 - найти индекс первого товара в массиве товаров, чья цена больше 200.
3. сортировка (метод sort).
 - Отсортировать массив строк `strings` по возрастанию.
 - Отсортировать массив чисел `numbers` по убыванию.
 - Отсортировать массив объектов `products` по возрастанию цены.
 - Отсортировать массив строк по убыванию кол-ва символов в строке;
 - отсортировать массив объектов (товары) по категории (в алфавитном порядке), и по возрастанию цены. Т.е упорядочить по категориям, и в разрезе категорий - по возрастанию цены.
4. Работа с методом `reduce`.
 - получить сумму элементов массива numbers
 - получить суммарную стоимость всех товаров массива `products`
 - из массива строк `strings` получить объект, в котором ключами будут строки из массива, а значениями - длины этих строк. Пример:
 ```
 // Исходный массив
 let arr = ["This", "is", "an", "array", "of", "strings"];
 // Ожидаемый результат
 {
  this: 4,
  is: 2,
  an: 2,
  array: 5,
  of: 2,
  strings: 7
 }
 ```
 - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
 - задача "со звездочкой". Получить объект, в котором будут суммарные стоимости товаров по категориям.

### Полезные ссылки
- (Русскоязычный гайд)[https://learn.javascript.ru/array-methods] по методам массивов
- (Для гурманов)[https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array] спецификация MDN, местами русскоязычная.
- [Интерактивный пример reduce](https://doka.guide/js/array-reduce/) - на более глубокое понимание метода reduce.