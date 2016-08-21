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

## Scripts

Scripts used to scrape sites are found in `./scripts`.

## Testing

`npm test`

## License

MIT License, Copyright (c) 2016 Jordan Santell
