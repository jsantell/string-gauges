var path = require('path');
var fs = require('fs');
var TYPES = require('./types.json');
var MESSAGE = '/* This file generated. Do not edit. */\n';
var EXPORTS = 'module.exports=';

var DATA = Object.keys(TYPES).reduce(function (exporter, type) {
  exporter[type] = TYPES[type];
  exporter[type].data = require('./data/' + type + '.json');
  return exporter;
}, Object.create(null));

var file = MESSAGE + EXPORTS + JSON.stringify(DATA, null, 2);
var filePath = path.join(__dirname, 'dist', 'data.js');
fs.writeFile(filePath, file, 'utf8', function (err) {
  console.log(err || ('Created file at ' + filePath));
});
