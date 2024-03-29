# README

## Практическое занятие №33

### Тема:

Репозитарий содержит материалы по практическому занятию №36, посвященному работе с React Router.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Подготовительная задача. Создаем страницу приветствия для нашего приложения. Создадим папку `pages`, а в ней файл - `HomePage.jsx`. Это будет домашняя страница нашего проекта, где храбрый Торин собирает участников похода к Одинокой Горе.
2. Интегрируем роутер в наше приложение. Проект уже содержит добавленную зависимость, можно использовать библиотеку `react-router-dom`. Задача - в компоненте `App` обеспечить, чтобы на странице по умолчанию (адрес `/`) рендерился компонент `HomePage`. И нам также предстоит сделать страницу подачи заявки - `RegisterPage.jsx`, которая будет содержать форму `DwarfForm`. Эта страница должна быть доступна по пути `register`. При этом, текст приветствия (welcome stranger) должен рендериться всегда, независимо от текущего маршрута.
3. Делаем роут "не найдено". Наша задача, чтобы при попытке перехода на несуществующую страницу выдавался параграф с текстом 'There is no place in the MiddleEarth with such name!'.
4. Делаем еще одну страницу, заодно вспоминаем эффекты. На нашем проекте будет лента, где смелые гномы-участники похода будут делиться своими мыслями по поводу происходящего. Создаем компонент для списка постов, `PostsList`. Он будет рендерить список постов. Первый шаг - научиться загружать это список с бэка, с адреса `https://jsonplaceholder.typicode.com/posts`. Он нам вернет массив постов. Нужно при монтировании компонента (первый рендер), загружать этот список, и сохранять ответ (список товаров) в локальном стейте. ВАЖНО! Асинхронную операцию (обращение к бэку), нужно сделать в эффекте! И отрисуем этот список, нужно пройтись по нему и отрисовать каждый пост как div, который содержит заголовок и текст поста.
5. Добавляем новый роут, `/feed`. Он должен вести на страницу постов.
6. Теперь создаем линки на эти маршруты. В компоненте `App`, добавить ссылки на наши страницы.
7. Программная навигация. Нужно, чтобы после успешной обработки формы на странице `RegisterPage`, осуществлялась навигация на главную страницу (`/`).

### Полезные ссылки по занятию:
 - [React Router v6](https://blog.logrocket.com/react-router-v6-guide/) - отличная информативная статья (увы, англоязычная), по использованию свежей версии роутера.
 - [Что нового в React Router](https://habr.com/ru/companies/kts/articles/598835/) - русскоязычная статья, освещает основные отличия нового роутера от предыдущих версий. Можно просмотреть после ознакомления с первой статьей, и оф.документацией.