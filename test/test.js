var assert = require('assert');
var types = require('../');

describe('test string-gauges', function () {
  it('exports keys of string types', function () {
    assert(types['daddario-nw']);
    assert(types['kalium-wound']);
    assert(types['elixer-polyweb']);
  });

  it('each string type has a brand, name, and type', function () {
    assert(Object.keys(types).length >= 4);
    Object.keys(types).forEach(function (type) {
      assert(typeof types[type].brand === 'string');
      assert(typeof types[type].name === 'string');
      assert(typeof types[type].type === 'string');
    });
  });

  it('all string data is valid', function () {
    Object.keys(types).forEach(function (type) {
      var data = types[type].data;

      Object.keys(data).forEach(function (gauge) {
        var weight = data[gauge];
        assert(/^0./.test(gauge), 'All gauges must start with `0.`');
        assert(/^0./.test(weight), 'All weight must start with `0.`');
        assert(!Number.isNaN(Number(gauge)));
        assert(!Number.isNaN(Number(weight)));
      });
    });
  });
});
