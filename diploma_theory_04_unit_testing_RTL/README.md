# README

## Теоретическое занятие №4

Репозитарий содержит материалы по проектному занятию №4, посвященному работе с юнит тестами, и библиотекой `react-testing-library`.

### Тестирование компонентов React
Для тестирования React-компонентов, существует множество библиотек, например, Cypress, Enzyme, Mocha, ..., но оптимальным выбором на сегодня будет `react-testing-library`. Почему именно она?
 - написана Kent.C.Dodds - человек, который является гуру в react
 - максимально сконцентирована на тестировании - не нужно вникать в реализацию
 - легковесная
 - и много чего еще.

Основная идея библиотеки - не нужно вникать в детали реализации компонента, нужно действовать как пользователь. То есть, если нам нужно найти кнопку в компоненте, то мы ищем ее так, как искал бы ее пользователь - например, кнопка с текстом "Нажми меня". Или "текстовое поле с таким-то плейсхолдером", и т.д.

Таким образом, мы строим наши тесты, исходя из того, что должен увидеть пользователь, и что он может/должен сделать с компонентом.

**Что обычно тестируют в компонентах**
Обычно, компоненты покрывают тестами так же, как и функции/модули. Проверяют штатное функционирование, т.е. нормальный рендер, и проверяют этапы жизненного цикла компонента, и те места, где он может изменить свое отображение.

**Как это работает**
React-testing-library "имитирует" браузер, и рендерит компонент в нем: то есть, строит разметку, и ведет себя примерно как браузер.

**Первый тест компонента**
Попробуем покрыть юнит-тестами наш первый компонент, `SimpleText`. Это просто отображение текстовки. С точки зрения пользователя, когда рисуется этот компонент, он должен увидеть на экране текст "Simple static text". То есть, нам нужно отрендерить компонент, и проверить, есть ли на экране нечто с текстом "Simple static text".

Создадим файл `SimpleText.test.jsx` - то есть, праивло именования такое же как и ранее. Теперь, в этом файле, нам нужно создать юнит-тесты, которые будут рендерить наш компонент, и сравнивать ожидаемый результат с действительным. Наш первый (и пожалуй единственный) тест для этого компонента - отрендерить его, и увидеть, что мы получили нужный текст на экране. Сделаем это.
```
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SimpleText from './SimpleText';

describe('SimpleText', () => {
  it('renders SimpleText component', () => {
    render(<SimpleText />); // рендерим компонент средствами react-testing-library
    const visibleEl = screen.getByText('Simple static text'); // пытаемся найти на экране что-то с текстом Simple static text"
    expect(visibleEl).toBeInTheDocument(); // ожидаем, что это "что-то" есть на экране
  });
});
```
Ура, вот и первый тест нашего компонента!

Теперь усложним задачу. Попробуем покрыть тестами компонент `DynamicText`. Глянем на код компонента. Видно, что этот компонент просто показывает текст из пропса `text`, а если его нет - показывает текст `Dummy!`. Получается, что у нас для этого компонента нужно как минимум 2 юнит теста. Закрепляем практикой, и пишем эти тесты.

**Тестирование компонента с пропсами**
У нас есть компонент `AttemptsList`. Он рендерит список "попыток". В пропсах он принимает массив попыток, и фукнцию-обработчик клика на элементе списка. Попробуем покрыть его тестами. Судя по реализации, нам потребуется как минимум 2 теста: для пустого массива попыток, и для непустого. В качестве функции-обработчика, пока можно применить заглушку (mock).

**События**
Иногда нужно имитировать действия пользователя для проверки. Например, проверить, что при нажатии на кнопку что-то происходит. Давайте проверим отработку функции-обработчика клика по элементу.
```
  it('AttemptsList click handler', () => {
    // делаем заглушку - типа функцию обработчик клика
    const dropAttemptMock = jest.fn();
    // рендерим компонент с пропсами
    render(<AttemptsList attempts={[ {id:1, attemptData: 'SimpleAttempt'} ]} dropAttempt={dropAttemptMock} />);
    // ищем нечто с текстом SimpleAttempt 1
    const attemptEl = screen.getByText('SimpleAttempt 1');
    expect(attemptEl).toBeInTheDocument();
    // генерируем событие клика на этом элементе
    fireEvent.click(attemptEl);
    // ожидаем, что после этого наша функция-обработчик будет вызвана один раз
    expect(dropAttemptMock).toBeCalled();
  });
```
Мы можем сделать тест еще более точным, и убедиться, что наша функция не просто была вызвана, а вызвана с конкретным аргументом, то есть используем `toBeCalledWith`.

**Методы поиска getBy.., findBy.., findBy..**
Библиотека RTL дает нам массу возможностей для поиска чего-либо. Ранее, мы использовали только `getByText` - то есть искали по отображаемому текстовому содержимому. Но это далеко не все возможности. Можно искать по тексту плейсхолдера `byPlaceholderText`, по тексту метки `byLabelText`, по значению атрибута `data-testid` (это прям крайний вариант), по роли `byRole`, и еще несколько вариантов. Также, кроме метода `getBy..`, есть еще другие варианты. В чем разница:
 - `getBy..` - возвращает соответствующий запросу узел, и кидает ошибку, если такого узла нет, или если таких узлов несколько
 - `queryBy` - возвращает соответствующий запросу узел, и возвращает `null` если такого узла не найдено. Кидает ошибку, если найдено больше одного элемента, соответствующего запросу.
 - `findBy` - возвращает промис, который резолвится, когда найден элемент, соответствующий запроссу. Промис отвергается, если элемент не найден в течении 1 секунды, или если найдено несколько элементов.

## Полезные ссылки по занятию:
 - [Введение в RTL](https://www.robinwieruch.de/react-testing-library/) - англоязычная обучалка. Рекомендуется к прочтению даже авторами RTL.
 - [Документация](https://testing-library.com/docs/) - англоязычная документация. Рекомендуется как справочник - там все описано более чем доступно и толково, но есть сложности - как найти именно то что нужно.