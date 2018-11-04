const assert = require('assert');
const recursion = require('./recursion.js');

describe('recursion', function(){
  it('You should get an array: [[100],[90,99]]', function() {
    const tree = {
      value: 100,
      left: {
        value: 90,
      },
      right: {
        value: 99,
      },
    };
    assert.deepEqual(recursion(tree), [[100], [90, 99]]);
  });
  it('You should get an array: [[11], [6, 17], [2, 8, 14, 20]]', function() {
    const tree = {
      value: 11,
      left: {
        value: 6,
        left: {
          value: 2,
        },
        right: {
          value: 8,
        },
      },
      right: {
        value: 17,
        left: {
          value: 14,
        },
        right: {
          value: 20,
        },
      },
    };
    assert.deepEqual(recursion(tree), [[11], [6, 17], [2, 8, 14, 20]]);
  });
})
