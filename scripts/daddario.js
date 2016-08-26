// http://www.daddario.com/upload/tension_chart_13934.pdf
// This is parsing a PDF in Firefox's viewer, so any of this script could
// very easily break.
// TODO role this into an automated parser, maybe with pdf.js or something

var filterBySku = sku => Array.filter(document.querySelectorAll('div'), div => sku.test(div.innerText));
// XL - Nickelplated steel round wound
var wound = filterBySku(/^NW\d\d\d$/);
// Plain steel lock twist
var plain = filterBySku(/^PL\d\d\d$/);
var results = {
  plain: plain.reduce(reducer, {}),
  wound: wound.reduce(reducer, {}),
};
function reducer (collection, sku) {
  var weightText = sku.nextSibling.innerText;
  var gauge = sku.innerText.replace(/^\D*/, '0.');
  var weight = /\d +\d/.test(weightText) ? weightText.split(' ')[0] : weightText;
  collection[gauge] = Number(weight);
  return collection;
}
