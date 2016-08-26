var types = {
  'daddario-pl': {
    brand: 'D\'Addario',
    type: 'plain',
    name: 'Plain Steel - Lock Twist',
  },
  'daddario-nw': {
    brand: 'D\'Addario',
    type: 'wound',
    name: 'XL - Nickelplated Steel Round Wound',
  },
  'kalium-plain': {
    brand: 'Kalium',
    type: 'plain',
    name: 'Plain',
  },
  'kalium-wound': {
    brand: 'Kalium',
    type: 'wound',
    name: 'Wound',
  },
  'elixer-nanoweb': {
    brand: 'Elixer',
    type: '',
    name: 'Electric NANOWEB',
  },
  'elixer-polyweb': {
    brand: 'Elixer',
    type: '',
    name: 'Electric POLYWEB',
  },
  'elixer-acoustic-phosphor-nanoweb': {
    brand: 'Elixer',
    type: '',
    name: 'Acoustic Phosphor Bronze NANOWEB',
  },
  'elixer-acoustic-80-nanoweb': {
    brand: 'Elixer',
    type: '',
    name: 'Acoustic 80/20 Bronze NANOWEB',
  },
  'elixer-acoustic-80-polyweb': {
    brand: 'Elixer',
    type: '',
    name: 'Acoustic 80/20 Bronze POLYWEB',
  },
};

Object.keys(types).forEach(function (type) {
  types[type].data = require('./data/' + type + '.json');
});

module.exports = types;
