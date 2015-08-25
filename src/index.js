//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - DEPENDENCIES
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var tasks = require('./tasks');
var sinon = require('karma-sinon-chai/node_modules/sinon');
var chai = require('karma-sinon-chai/node_modules/chai');

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - EXPORTS
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

module.exports = {
  use: function (gulp, lygt) {
    var t = tasks.use(gulp);
    if (lygt) {
      lygt.merge(lygt.tasks, t);
      lygt.sinon = sinon;
      lygt.chai = chai;
    }
    return {
      tasks: t
    };
  }
};
