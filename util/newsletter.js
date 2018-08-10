var path = require('path');
var { saveNewsletterRecipient } = require(path.join(__dirname, '../../db-midle-shop/lib/newsletter-list'));


async function addToNewsletterList(params) {
  const response = await saveNewsletterRecipient(params);
  if (response.new) {
    // отправка письма для подтверждения подключения рассылки
  }
  return response.result;
}
module.exports.addToNewsletterList = addToNewsletterList;
