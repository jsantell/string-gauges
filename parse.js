const path = require('path');
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs-promise');
const { async } = require('co-task');
const TYPES = require('./types.json');
const parsers = require('./parsers/index');

Object.keys(TYPES).forEach(async(function* (typeName) {
  const def = TYPES[typeName];

  if (!def.parser || !def.parserUrl) {
    console.error(`No parser or parserUrl found for ${typeName}`);
    return;
  }

  let data = yield req(def);
  data = JSON.stringify(data, null, 2);
  yield fs.writeFile(path.join(__dirname, 'data', `${typeName}.json`), data);
}));

function req ({ parserUrl, parserArgs, parser, name }) {
  return new Promise((res, rej) => {
    console.log(`Parsing ${parserUrl} with ${parser} parser for ${name}`);
    request(parserUrl, function (err, response, body) {
      if (err || response.statusCode !== 200) {
        reject(new Error(`Error loading ${parserUrl}`, err, response.statusCode));
        return;
      }

      const $ = cheerio.load(body);
      const data = parsers[parser].apply(null, [$].concat(parserArgs || []));
      res(data);
    });
  });
}
