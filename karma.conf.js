module.exports = function (config) {

  var root = process.cwd();
  var sources = root + '/src/**/*.js';
  var tests = root + '/test/**/*.spec.js';
  var coverage = root + '/coverage';
  var preprocessors = {};

  preprocessors[sources] = ['commonjs', 'coverage'];
  preprocessors[tests] = ['commonjs'];

  config.set({
    frameworks: ['mocha', 'sinon-chai', 'commonjs'],
    files: [
      sources,
      tests
    ],
    preprocessors: preprocessors,
    reporters: ['mocha', 'coverage'],
    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: coverage,
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.xml'},
        {type: 'lcov', subdir: 'lcov'}
      ]
    }
  });
};
