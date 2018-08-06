
/**
 * Middleware for request redirecting HTTP on HTTPS, without www on www.
 *
 * @this  {redirect}
 * @param {object} options - Redirecting Options.
 * @param {object} options.https - HTTPS redirecting Options.
 * @param {boolean} options.https.redirect - Allow redirection.
 * @param {number} options.https.code - Redirection code.
 * @param {object} options.www - WWW redirecting Options.
 * @param {boolean} options.www.redirect - Allow redirection.
 * @param {number} options.www.code - Redirection code.
 * @return {function} - Middleware.
 */
function redirect(options) {
  var hRedirect = options.https.redirect;
  var hCode = options.https.code;
  var wRedirect = options.www.redirect;
  var wCode = options.www.code;

  if (!hRedirect && wRedirect) {
    return wwwRedirect({redirect: wRedirect, code: wCode});
  } else if (hRedirect && !wRedirect) {
    return httpsRedirect({redirect: hRedirect, code: hCode});
  } else if (hRedirect && wRedirect) {
    return function (req, res, next) {
      if (req.protocol === "http") {
        res.writeHead(hCode, { "Location": "https://www." + req.headers.host + req.url });
        res.end();
      } else if (!/^www./i.test(req.headers.host)) {
        res.writeHead(wCode, { "Location": "https://www." + req.headers.host + req.url });
        res.end();
      } else {
        next();
      }
    }
  } else {
    return function (req, res, next) {
      next();
    }
  }
}
module.exports = redirect;


/**
 * Middleware for request redirecting without www on www.
 *
 * @this  {wwwRedirect}
 * @param {object} options - Redirecting Options.
 * @param {boolean} options.redirect - Allow redirection.
 * @param {number} options.code - Redirection code.
 * @return {function} - Middleware.
 */
function wwwRedirect (options) {
  var redirect = options.redirect;
  var code = options.code;

  if (redirect) {
    return function (req, res, next) {
      if (!/^www./i.test(req.headers.host)) {
        res.writeHead(code, { "Location": req.protocol + "://www." + req.headers.host + req.url });
        res.end();
      } else {
        next();
      }
    }
  } else {
    return function (req, res, next) {
      next();
    }
  }
}
module.exports.wwwRedirect = wwwRedirect;


/**
 * Middleware for request redirecting HTTP on HTTPS.
 *
 * @this  {httpsRedirect}
 * @param {object} options - Redirecting Options.
 * @param {boolean} options.redirect - Allow redirection.
 * @param {number} options.code - Redirection code.
 * @return {function} - Middleware.
 */
function httpsRedirect (options) {
  var redirect = options.redirect;
  var code = options.code;

  if (redirect) {
    return function (req, res, next) {
      if (req.protocol === "http") {
        res.writeHead(code, { "Location": "https://" + req.headers.host + req.url });
        res.end();
      } else {
        next();
      }
    }
  } else {
    return function (req, res, next) {
      next();
    }
  }
}
module.exports.httpsRedirect = httpsRedirect;
