/**
 * A simple application for redirecting HTTP requests in production mode.
 * @module /app-redirect
 */

var path = require('path');
var express = require('express');
var helmet = require('helmet');
var config = require(path.join(__dirname, './config'));
var redirect = require(path.join(__dirname, './util/redirect'));

var app = express();

app.use(helmet());
app.use(
  redirect({
    https: { redirect: config.get('backend.https_redirect'), code: 301 },
    www: { redirect: config.get('backend.www_redirect'), code: 301 },
  })
);

module.exports = app;
