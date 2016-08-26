// store.kaliumstrings.com/TensionCalculator/tensionChart.php

module.exports = function parse ($, type) {
  const results = {};
  $('tr').each(function () {
    var row = $(this);
    var children = row.children('td');
    if (children.length === 0) {
      return;
    }

    var gauge = $(children.get(1)).text();
    var weight = Number($(children.get(2)).text());
    if (Number.isNaN(weight)) { return results; }
    var rowType = !/p/.test(gauge) ? 'wound' : 'plain';

    if (type !== rowType) {
      return;
    }

    gauge = gauge.replace(/p/g, '');

    // We get this in kalium wound for some reason
    if (gauge == 0) {
      return;
    }

    results['0' + gauge.replace(/p/g, '')] = Number(weight);
  });
  return results;
};
