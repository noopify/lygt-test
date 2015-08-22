var foo = require('./foo');

function yo(str) {
    return 'yo' + str;
}

function run(int) {
    return yo(foo.one(int));
}

function runFoo(int) {
    return yo(int) + foo.two(int);
}

module.exports = {
    run: run,
    runFoo: runFoo
};