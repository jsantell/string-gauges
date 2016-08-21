// store.kaliumstrings.com/TensionCalculator/tensionChart.php
Array.prototype.reduce.call(document.querySelectorAll('tr'), (results, row) => {
  var gauge = row.children[1].innerText;
  var weight = Number(row.children[2].innerText);
  if (Number.isNaN(weight)) { return results; }
  var isWound = !/p/.test(gauge);
  results[isWound ? 'wound' : 'plain']['0' + gauge.replace(/p/g, '')] = Number(weight);
  return results;
}, { plain: {}, wound: {} });
