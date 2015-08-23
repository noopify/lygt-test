//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - DEPENDENCIES
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var unit = require('./unit'),
  lint = require('./lint'),
  jscs = require('./jscs'),
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
      jscs: jscs.init(gulp),
      lint: lint.init(gulp),
      unit: unit.init(gulp)
    };
  }
};
