const path = require('path');
const nodemailer = require('nodemailer');
const cnf = require(path.join(__dirname, '../config'));


// create reusable transporter object using the default SMTP transport
const mailerNoReply = nodemailer.createTransport({
  host: cnf.get("mailer.noreply.host"),
  port: cnf.get("mailer.noreply.port"),
  secure: cnf.get("mailer.noreply.secure"),
  auth: {
    user: cnf.get("mailer.noreply.auth.user"),
    pass: cnf.get("mailer.noreply.auth.pass"),
  }
});

// verify connection configuration
mailerNoReply.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});


function sendMail (options) {
  // setup email data with unicode symbols
  /*
    from: "Name <name@mail.com>",
    to: "name1@mail.com, name2@mail.com",
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  */
  let mailOptions = {};
  if (options.from !== undefined) {
    mailOptions.from = options.from + ` <${cnf.get("mailer.noreply.from")}>`;
  } else {
    mailOptions.from = `No Reply MIDLE <${cnf.get("mailer.noreply.from")}>`;
  }

  mailOptions.to = options.to;
  mailOptions.subject = options.subject;
  mailOptions.text = options.text;
  mailOptions.html = options.html;

  // send mail with defined transport object
  mailerNoReply.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message info: %o', info);
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
}


module.exports = sendMail;
