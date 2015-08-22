//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - DEPENDENCIES
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var unit = require('./unit'),
  lint = require('./lint'),
  complexity = require('./complexity');

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - EXPORTS
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

module.exports = {
  use: function (gulp) {
    return {
      complexity: complexity.init(gulp),
      lint: lint.init(gulp),
      unit: unit.init(gulp)
    };
  }
};
