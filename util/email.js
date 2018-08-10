var path = require('path');
var { saveEmail } = require(path.join(__dirname, '../../db-midle-shop/lib/email'));
var { sendWelcome } = require(path.join(__dirname, '../mailer'));

async function checkEmail(params) {
  const response = await saveEmail(params.email);
  if (response.new) {
    // отправка приветственного письма со ссылкой на верификацию
    sendWelcome({email: params.email, language: params.language});
  }
  return response.result;
}
module.exports.checkEmail = checkEmail;
