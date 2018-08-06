var path = require('path');
var convict = require('convict');
var schema = require(path.join(__dirname, './schema'));

// Define a schema
var config = convict(schema);

// Load environment dependent configuration
var env = config.get('env');

config.loadFile(path.join(__dirname, './data/' + env + '/config.json'));

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;
