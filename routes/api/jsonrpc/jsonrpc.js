
//var jsonrpcError = require('./jsonrpc-error');
var path = require('path');
var { invalidRequest, methodNotFound, internalError, invalidParams
} = require('./jsonrpc-error');

var { checkEmail } = require(path.join(__dirname, '../../../util/email'));
var { addToNewsletterList } = require(path.join(__dirname, '../../../util/newsletter'));




async function JSONRPC (request={}) {
  if (Array.isArray(request)) {
    // rpc call Batch
  } else {
    return await methodProcessing(request)
  }
}

module.exports = JSONRPC;


async function methodProcessing(request={}) {
  var response = { jsonrpc: "2.0", result: undefined, error: undefined, id: null };
  // method check
  if (request.method === undefined || request.method === null) {
    response.error = invalidRequest;
    if (request.id !== undefined) response.id = request.id;
    return res;
  }

  switch (request.method) {

    case "device_init":
      response.result = await resolveAfter2Seconds(request);
      break;

    case "device_check_did":
      // распаковка jwt
      response.result = await resolveAfter2Seconds(request);
      break;
    case "newsletter_request_to_connect":
      response = await newsletterRequestToConnect(request);
      break;
    case "echo":
      response.result = request;
      break;
    default:
      response.error = methodNotFound;
      break;
  }

  if (request.id !== undefined) response.id = request.id;
  //console.log(response);
  return response;
}



function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function newsletterRequestToConnect(request) {
  var response = { jsonrpc: "2.0", result: undefined, error: undefined, id: null };

  if (typeof request.params.email !== "string") response.error = invalidParams;
  if (typeof request.params.agree !== "boolean") response.error = invalidParams;
  if (typeof request.params.timezone_offset_minutes !== "number") response.error = invalidParams;
  if (typeof request.params.pathname !== "string") response.error = invalidParams;

  const emailInDB = await checkEmail(request.params);
  request.params.email = emailInDB;
  return addToNewsletterList(request.params)
  .then((result) => {
    response.result = {};
    response.result.ok = true;
    //console.log('Successful response', response);
    return response;
  })
  .catch((err) => {
    response.error = internalError;
    //console.error('Faulty response', err, response);
  });
}
