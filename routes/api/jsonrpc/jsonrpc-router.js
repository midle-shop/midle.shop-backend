var express = require('express');
var router = express.Router();

var JSONRPC = require('./jsonrpc');
var parseError = require('./jsonrpc-error').parseError;
var internalError = require('./jsonrpc-error').internalError;



/**
 * Invalid JSON was received by the server.
 * An error occurred on the server while parsing the JSON text.
 */
router.post('/', function(req, res, next) {
  var response = { jsonrpc: "2.0", result: undefined, error: undefined, id: null };
  try {
    if (typeof req.body === "string") {
      req.body = JSON.parse(req.body);
    } else if (typeof req.body === "object") {
      JSON.parse(JSON.stringify(req.body));
    }
  } catch (e) {
    console.error(e);
    response.error = parseError;
    return res.json(response);
  }
  next();
});


router.post('/', function(req, res) {
  var response = { jsonrpc: "2.0", result: undefined, error: undefined, id: null };
  return JSONRPC(req.body)
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    response.error = internalError;
    if (req.id !== undefined) response.id = req.id;
    res.json(response);
  });
});


module.exports = router;
