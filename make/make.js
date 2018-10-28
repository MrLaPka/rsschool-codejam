module.exports = function make(...args) {
  if (!(args[args.length - 1] instanceof Function))
  return function(...args1){ 
    return make(...args, ...args1)
  }
    const convertToFunc = args.splice(- 1, 1)[0];
    const returnValue = args.reduce(function(previousValue, currentItem){
      return convertToFunc(previousValue, currentItem) 
    });
    return returnValue;
  }
