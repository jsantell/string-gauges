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
};

Object.keys(types).forEach(function (type) {
  types[type].data = require('./data/' + type + '.json');
});

module.exports = types;
