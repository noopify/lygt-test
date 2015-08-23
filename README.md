### Collection of GulpTasks for browserify project.

Add some tasks to lygt ( https://github.com/noopify/lygt ):

- unit +coverage
- jshint, jscs
- complexity

```javascript
var gulp = require('gulp');
var lygt = require('lygt').use(gulp);
var tasks = lygt.tasks;

lygt.add(require('lygt-test'));

tasks.unit(); // Create task `unit`
tasks.lint();
tasks.complexity();

gulp.task('test', function (next) {
    lygt.run('complexity', 'lint', 'unit', next);
});
```

See `examples/` for more details.
