var TYPES = require('./types.json');

module.exports = Object.keys(TYPES).reduce(function (exporter, type) {
  exporter[type] = TYPES[type];
  exporter[type].data = require('./data/' + type + '.json');
  return exporter;
}, Object.create(null));
