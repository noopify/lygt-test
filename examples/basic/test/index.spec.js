var test = require('../src');

describe('index', function () {
    it('should be equal', function () {
        expect(test.run(40)).to.be.equal('yo40');
    });
    it('should be true', function () {
        expect(test.runFoo(40)).to.be.equal('yo4080');
    });
});