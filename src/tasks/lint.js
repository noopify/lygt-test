//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - DEPENDENCIES
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var _ = require('lodash'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

var defaultOptions = {
  as: 'lint',
  from: './src/**/*.js',
  reporter: stylish,
  plugins: {
    jshint: {}
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
        .pipe(jshint(opts.plugins.jshint))
        .pipe(jshint.reporter(opts.reporter, {verbose: true}));
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
