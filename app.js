/**
 * Main application.
 * @module /app
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var config = require(path.join(__dirname, './config'));
var { wwwRedirect } = require(path.join(__dirname, './util/redirect'));

var apiRouter = require('./routes/api');
var indexRouter = require('./routes/index');

var app = express();
app.use(helmet());
app.use(wwwRedirect({redirect: config.get('backend.www_redirect'), code: 301}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'midle.shop-web-app/build')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', apiRouter);
app.get('*', indexRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
