var express = require('express');
var router = express.Router();
var jsonrpcRouter = require('./jsonrpc');

/* Post /api listing.
router.post('/', function(req, res) {
  console.log("/api")
  res.send('{"jsonrpc": "2.0", "result": 18, "id": 0}');
});
*/

/* Post /api/jsonrpc listing. */
router.use('/jsonrpc', jsonrpcRouter);


module.exports = router;
