//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - DEPENDENCIES
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var _ = require('lodash'),
  complexity = require('gulp-complexity');

var defaultOptions = {
  as: 'complexity',
  from: './src/**/*.js',
  plugins: {
    complexity: {}
  }
};

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - PUBLIC
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function init(gulp) {
  return function (opts) {
    opts = _.merge(defaultOptions, opts);

    var task = gulp.task(opts.as, function () {
      return gulp.src(opts.from)
        .pipe(complexity(opts.plugins.complexity));
    });

    gulp.tasks[opts.as].opts = opts;

    return task;
  }
}


//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - EXPORTS
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

module.exports = {
  init: init
};
