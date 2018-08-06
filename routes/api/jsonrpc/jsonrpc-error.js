//{"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "1"}

var error = { code: -1, message: "", data: undefined };
module.exports = error;

/**
 * Invalid JSON was received by the server.
 * An error occurred on the server while parsing the JSON text.
 */
var parseError = { code: -32700, message: "Parse error" };
module.exports.parseError = parseError;

/**
 * The JSON sent is not a valid Request object.
 */
var invalidRequest = { code: -32600, message: "Invalid Request" };
module.exports.invalidRequest = invalidRequest;

/**
 * The method does not exist / is not available.
 */
var methodNotFound = { code: -32601, message: "Method not found" };
module.exports.methodNotFound = methodNotFound;

/**
 * Invalid method parameter(s).
 */
var invalidParams = { code: -32602, message: "Invalid params" };
module.exports.invalidParams = invalidParams;

/**
 * Internal JSON-RPC error.
 */
var internalError = { code: -32603, message: "Internal error" };
module.exports.internalError = internalError;


/**
 * Reserved for implementation-defined server-errors.
 * -32000 to -32099	Server error
 */
var serverError = { code: -32000, message: "Server error" };
module.exports.serverError = serverError;
