const assert = require('assert');
const make = require('./make.js');

describe('make', function() {
  const sum = function (a,b){return a+b;}
  const diff = function (a,b){return a-b;}
  it('Аргументы: 15,34, 21, 666,41; Сумма: 777', function() {
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('Аргументы: 10.5,25.4, 33,1,5,101; Сумма: 175.9', () => {
    assert.deepEqual(make(10.5)(25.4, 33)(26)(5)(101)(sum), 200.9);
  });
  it('Аргументы: 0,0,0,0,-1,15; Разность: -14', () => {
    assert.deepEqual(make(0, 0)(0)(0, -1, 15)(diff), -14);
  });
  it('Аргументы: 111,222,333, -555,444; Разность: -333', () => {
    assert.deepEqual(make(111)(222)(333, -555)(444)(diff), -333);
  });
});
