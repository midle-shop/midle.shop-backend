
//var jsonrpcError = require('./jsonrpc-error');
var { invalidRequest, methodNotFound, internalError } = require('./jsonrpc-error');




async function JSONRPC (req={}) {
  if (Array.isArray(req)) {
    // rpc call Batch
  } else {
    return await methodProcessing(req)
  }
}

module.exports = JSONRPC;


async function methodProcessing(req={}) {
  var response = { jsonrpc: "2.0", result: undefined, error: undefined, id: null };
  // method check
  if (req.method === undefined || req.method === null) {
    response.error = invalidRequest;
    if (req.id !== undefined) response.id = req.id;
    return res;
  }

  switch (req.method) {

    case "device_init":
      console.log(req)
      response.result = await resolveAfter2Seconds(req);
      break;

    case "device_check_did":
      console.log(req)
      // распаковка jwt
      response.result = await resolveAfter2Seconds(req);
      break;
    case "newsletter_request_to_connect":
      console.log(req)
      response.result = await resolveAfter2Seconds(req);
      break;
    case "echo":
      response.result = req;
      break;
    default:
      response.error = methodNotFound;
      break;
  }

  if (req.id !== undefined) response.id = req.id;
  return response;
}



function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
