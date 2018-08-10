var Handlebars = require('handlebars');
var base   = require('./base');


const ru = `
<div>
<p>Привет, {{name}}!</p>
<p>Добро пожаловать в MIDLE!</p>
<p></p>
<p>Мы стремимся сделать Ваши ежедневные покупки быстрыми и комфортными!</p>
<p></p>
<p>НОВОСТИ</p>
<p>Следите за нашими новостями в <a href="https://t.me/midle_shop">
Telegram</a> и <a href="https://twitter.com/midle_shop">Twitter</a>.</p>
<p></p>
<p>СООБЩЕСТВО</p>
<p>Нам важно Ваше мнение, присоединяйтесь к обсуждению
в наших Telegram чатах: <a href="https://t.me/midle_shop_chat_ru">
русский язык (RU)</a>, <a href="https://t.me/midle_shop_chat">
английский язык (EN)</a> и <a href="https://t.me/midle_shop_chat_de">
немецкий язык (DE)</a>.
</p>
<p></p>
<p>Спасибо, что Вы с нами!</p>
<p>С благодарностью <br>
Команда MIDLE!</p>
</div>
`;

const en = `
<div>
<p>Hello  {{name}}!</p>
<p>Welcome to MIDLE!</p>
<p></p>
<p>We strive to make your daily purchases quick and comfortable!</p>
<p></p>
<p>NEWS</p>
<p>Follow our news in <a href="https://t.me/midle_shop">
Telegram</a> and <a href="https://twitter.com/midle_shop">Twitter</a>.</p>
<p></p>
<p>COMMUNITY</p>
<p>Your opinion is important to us, join the discussion in our Telegram chats:
<a href="https://t.me/midle_shop_chat_ru">
Russian (RU)</a>, <a href="https://t.me/midle_shop_chat">
English (EN)</a> and <a href="https://t.me/midle_shop_chat_de">
German (DE)</a>.</p>
<p></p>
<p>Thank you for being with us!</p>
<p>With gratitude
MIDLE Team!</p>
<div>
`
var source = {
  ru: ru,
  en: en,
};

/**
 * Функция генерации тела письма в HTML.
 *
 * @this  {compileHTML}
 * @param {object} context - Опции.
 * @param {string} context.language - Язык сообщения.
 * @param {string} options.name - Имя получателя.
 * @param {string} options.title - Название письма.
 * @return {string} - собранный HTML.
 */
function compileHTML (context) {
  var body = Handlebars.compile(source[context.language]);
  context.body = body(context);
  return base(context);
}

module.exports = compileHTML;
