//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - DEPENDENCIES
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

var _ = require('lodash'),
    Server = require('karma').Server;

var defaultOptions = {
    as: 'unit',
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
};

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// - PUBLIC
//
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function init(gulp) {
    return function (opts) {
        opts = _.merge(defaultOptions, opts);

        var task = gulp.task(opts.as, function (done) {
            return new Server(opts, done).start();
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
