var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  })
}); 

it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);
})

it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
})

it('getChange(1487,10000) should equal [1000,1000,1000,1000,1000,1000,1000,1000, 500, 10, 2, 1 ]', function(){
    assert.deepEqual(C.getChange(1487,10000), [1000,1000,1000,1000,1000,1000,1000,1000, 500, 10, 2, 1 ]);
});

it('getChange(10.1,20) should equal [5,2,2,0.5,0.2,0.2]', function(){
    assert.deepEqual(C.getChange(10.1,20), [5,2,2,0.5,0.2,0.2]);
})