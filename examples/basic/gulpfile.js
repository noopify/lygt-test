var gulp = require('gulp');
var lygt = require('lygt').use(gulp);
var tasks = lygt.tasks;

lygt.add(require('lygt-test'));

tasks.unit();
tasks.lint();
tasks.complexity();

gulp.task('test', function (next) {
    lygt.run('complexity', 'lint', 'unit', next);
});

