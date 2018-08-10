var path = require('path');
var config = require('../config');

var welcome = require('./hbs/welcome');

const languageDefault = config.get('language.default');
const languagesList = config.get('language.list');


const name = {
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
  if (contextName === undefined) { contextName = name[language]; }
  return contextName;
}

module.exports.mailWelcome = function(context) {
  context.language = checkLanguage(context.language);
  context.name = checkName(context.name, context.language);
  return welcome(context);
};
