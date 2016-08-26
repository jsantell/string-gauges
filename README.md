# string-gauges

Data mapping types of guitar strings by gauge to their unit weight in `pounds per linear inch (lb/in)`.

## Installing

```
$ npm install string-gauges
```

## Usage

The main export contains simple objects containing additional data about that string type, as well as it's gauge data.

```js
const types = require('string-gauges');

console.log(types['daddario-nw']);
/*
{
  "brand": "D'Addario",
  "type: "wound",
  "name": "XL - Nickelplated Steel Round Wound"
  "data": { ... }
}
*/
```

## Gauge Data

The gauge data maps string gauges via diameter in millimeters to the unit weight in pounds per linear inch.

```js
{
  "0.008": 0.0000142401458191,
  "0.0085": 0.00001607510288,
  ...
}
```

## Types

* Kalium Plain (`kalium-plain`)
* Kalium Wound (`kalium-wound`)
* D'Addario Plain Steel Lock Twist (`daddario-pl`)
* D'Addario XL - Nickelplated Steel Round Wound (`daddario-nw`)

## Data Collection

Data is scraped from string manufacturer websites via scripts. To scrape the latest (most likely won't change), run:

`npm run scrape`

Based off of the defintions in `types.json`, a parser from `./parsers` is used, after being passed in the `$` cheerio function, as well as any additional arguments spread via `parserArgs` in the definition.

For sites unscrapable, like D'Addario's PDFs, they live in `./scripts`, to be pasted into developer tools (recommend Firefox to call `copy(results)` afterwards for adding to clipboard.

## Testing

`npm test`

## License

MIT License, Copyright (c) 2016 Jordan Santell
