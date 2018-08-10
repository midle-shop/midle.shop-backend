var Handlebars = require('handlebars');

var source = `<!doctype html>
<html lang={{language}}>
  <head>
    <meta charset="utf-8">
    <title>{{title}}</title>
  </head>
  <body>
    {{{body}}}
  </body>
</html>`;

module.exports = Handlebars.compile(source);
