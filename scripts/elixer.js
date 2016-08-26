// Nanoweb http://www.elixirstrings.com/guitar-strings/electric-nanoweb-guitar-strings.html
// Polyweb http://www.elixirstrings.com/guitar-strings/electric-polyweb-guitar-strings.html

// The website lists strings by `{note}{stringNumber}`; map those to
// frequencies.
var STRING_TO_PITCH = {
  'E-1': 329.632, // E4
  'B-2': 246.944, // B3
  'G-3': 196, // G3
  'D-4': 146.832, // D3
  'A-5': 110, // A2
  'E-6': 82.41, // E2
};

// The elixer site uses 25.5 as the default scale length to perform their
// tension calculations
var SCALE_LENGTH = 25.5;

var results = Object.keys(STRING_TO_PITCH).reduce(function (data, stringName) {
  parse(data, stringName, STRING_TO_PITCH[stringName]);
  return data;
}, {});

// Each gauge has an array of potential values, due to the website's imprecise
// listing of tension (only whole numbers). So take all the potential weights
// that we've observed, and average them (TODO better way?)
results = Object.keys(results).sort(function (a, b) {
  return Number(a) - Number(b);
}).reduce(function (output, gauge) {
  var weights = results[gauge];
  output[gauge] = weights.reduce(function (sum, val) { return sum + val; }, 0) / weights.length;
  return output;
}, {});

console.log(results);

// For consistency, we have to convert the tension value back to the string weight
// for the consistency with the rest of the data.
// They list strings by set, so there are duplicates, but should be consistent
// throughout
function parse (aggregator, stringName, frequency) {
  var selector = 'td[data-th="' + stringName + '"]';
  var fields = document.querySelectorAll(selector);

  Array.prototype.forEach.call(fields, function (field) {
    var match = (field.innerText || '').match(/^(\.\d*) \/ (\d*)$/);
    if (!match) {
      return;
    }
    // The extra set of strings on the 12 string set messes this up as the pitches are different
    // octaves. Just ignore them, the gauges are covered by others.
    if (field.parentNode.querySelectorAll('.strings-continued-hidden').length) {
      return;
    }

    var gauge = Number(match[1]); // mm
    var tension = Number(match[2]); // pounds
    // T = M * (2 * L * F)^2 / 386.4
    // M = T * 386.4 / (2 * L * F)^2
    var weight = tension * 386.4 / Math.pow(2 * SCALE_LENGTH * frequency, 2);

    if (!aggregator[gauge.toFixed(3)]) {
      aggregator[gauge.toFixed(3)] = [];
    }
    aggregator[gauge.toFixed(3)].push(weight);
  });
}
