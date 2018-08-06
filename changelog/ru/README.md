# Журнал изменений

Все заметные изменения в этом проекте будут задокументированы в этом файле.

Формат основан на ["Ведите журнал изменений"](http://keepachangelog.com/ru/),
и этот проект придерживается ["Семантическое управление версиями"](
http://semver.org/).

***

## [Не выпущено]
### Добавлено
- Документы MIDLE v0.0.1 RU в '/public/static/documents';

### Изменено
- Сслыки в журнале изменений.

## [v0.0.2] - 2018-08-06
### Добавлено
- [Node-convict](https://www.npmjs.com/package/convict) для разделения
настроек приложения в различных режимах работы;
- [Helmet](https://www.npmjs.com/package/helmet) для повышения безопастности;
- Простая программа для перенаправления HTTP запросов в режиме производства;
- Промежуточный обработчик для перенаправления запросов HTTP на HTTPS,
без www на www.

### Удалено
- Релизы '/releases'.

## v0.0.1 - 2018-08-06
### Добавлено
- Интегрировано midle.shop-web-app v0.0.2;
- Автоматический перезапуск в режиме разработки с помощью nodemon;
- Backend (Инициация Backend с помощью
[Express application generator](http://expressjs.com/starter/generator.html)):
    - поддержка handlebars (hbs).
- [Релизы](/releases);
- [Журнал изменений](/changelog).

[Не выпущено]: https://github.com/midle-shop/midle.shop-backend/compare/v0.0.2...HEAD
[v0.0.2]: https://github.com/midle-shop/midle.shop-backend/compare/v0.0.1...v0.0.2
