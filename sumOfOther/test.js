const assert = require('assert');
const sum = require('./sumOfOther.js');
describe("sumOfOther", function() {

    it("input array: [2, 3, 4, 1], the resulting array: [8, 7, 6, 9]", function() {
      const sumOfOther = sum([2, 3, 4, 1]);
      assert.deepEqual(sumOfOther, [8, 7, 6, 9]);
    });
  
    it("input array: [5,5,7,10,9,0,11], the resulting array: [42, 42, 40, 37, 38, 47, 36]", function() {
      const sumOfOther = sum([5,5,7,10,9,0,11]);
      assert.deepEqual(sumOfOther, [42, 42, 40, 37, 38, 47, 36]);
    });

    it("input array: [0,0,0,0,0], the resulting array: [0,0,0,0,0]", function() {
      const sumOfOther = sum([0,0,0,0,0]);
      assert.deepEqual(sumOfOther, [0,0,0,0,0]);
    });
  
    it("input array: [999,-999,999,-999,998], the resulting array: [-1,1997,-1,1997,0]", function() {
      const sumOfOther = sum([999,-999,999,-999,998]);
      assert.deepEqual(sumOfOther, [-1,1997,-1,1997,0]);
    });

  });
