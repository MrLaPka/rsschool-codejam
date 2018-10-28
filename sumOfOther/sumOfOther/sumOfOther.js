module.exports = function sumOfOther(arr){
 let result = arr.reduce(function(sum,item){
return sum+item;
 }, 0);
 return  arr.map(function(item){
     return result-item;
 })
}