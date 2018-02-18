var expect = require('chai').expect,
    f = require('../js/triangle-calculator');

describe('Hell Triangle', function() {
    it('Calculate with a null', function() {
        expect(function(){f.HellTriangle.calculate()})
        .to.throw('Incorrect triangle type.');
    });

    it('Calculate with a string', function() {
        expect(function(){f.HellTriangle.calculate('')})
        .to.throw('Incorrect triangle type.');
    });

    it('Calculate with empty array', function() {
        expect(function(){f.HellTriangle.calculate([])})
        .to.throw('Incorrect triangle type.');
    });

    it('Calculate with wrong array [[6],[5],[9,7,1],[4,6,8,4]]', function() {
        expect(function(){f.HellTriangle.calculate([[6],[5],[9,7,1],[4,6,8,4]])})
        .to.throw('Not a triangle array.');
    });

    it('Calculate with triangle array of string', function() {
        expect(function(){f.HellTriangle.calculate([['a'],['b','c']])})
        .to.throw('Not a number.');
    });

    it('Calculate with array length 1', function() {
        expect(function(){f.HellTriangle.calculate([6])})
        .to.throw('Not a triangle array.');
    });

    it('Calculate with correct array [[6],[3,5]]', function() {
        expect(f.HellTriangle.calculate([[6],[3,5]]))
        .to.equal(11);
    });

    it('Calculate with correct array [[6],[3,5],[9,7,1]]', function() {
        expect(f.HellTriangle.calculate([[6],[3,5],[9,7,1]]))
        .to.equal(20);
    });

    it('Calculate with correct array [[6],[3,5],[9,7,1],[4,6,8,4]]', function() {
        expect(f.HellTriangle.calculate([[6],[3,5],[9,7,1],[4,6,8,4]]))
        .to.equal(26);
    });
});
