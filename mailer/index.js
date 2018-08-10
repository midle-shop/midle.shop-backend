var path = require('path');
var mailerNoReplySendMail = require(path.join(__dirname, '../mailer/noreply'));
var { mailWelcome } = require('../mails');

var config = require('../config');

const languageDefault = config.get('language.default');
const languagesList = config.get('language.list');

const nameDefault = {
  ru: "друг",
  en: "Friend",
};

function checkLanguage(language) {
  if (language === undefined) { language = languageDefault; }
  if (language === null) { language = languageDefault; }
  if (!languagesList.includes(language)) { language = languageDefault; }
  return language;
}

function checkName(contextName, language) {
  if (contextName === undefined) { contextName = nameDefault[language]; }
  return contextName;
}


/**
 * Функция отправки письма на email.
 *
 * @this  {compileHTML}
 * @param {object} context - Опции.
 * @param {string} context.email - Aдрес получателя.
 * @param {string} context.language - Язык сообщения.
 * @param {string} options.name - Имя получателя.
 * @return {string} - собранный HTML.
 */
function sendWelcome (context) {
  const subject = {
    ru: "Добро пожаловать в MIDLE!",
    en: "Welcome to MIDDLE!",
  };
  const from = {
    ru: "Команда MIDLE",
    en: "MIDLE Team",
  };

  if (context.email !== undefined) {
    context.language = checkLanguage(context.language);
    context.name = checkName(context.name, context.language);

    mailerNoReplySendMail({
      from: from[context.language],
      to: context.email,
      subject: subject[context.language],
      //text: 'отправка приветственного письма со ссылкой на верификацию'
      html: mailWelcome({
        title: subject[context.language], language: context.language,
        name: context.name,
      })
    })
  }
}
module.exports.sendWelcome = sendWelcome;

module.exports.mailerNoReplySendMail = mailerNoReplySendMail;
