module.exports = function recursion(tree) {
  const arrayFromTreee = [];
  const level = 0;
  node(tree.value, tree.left, tree.right, level);
  return arrayFromTreee;

  function node(value, left, right, level) {
    concat(value, level);
    if (left) {
      node(left.value, left.left, left.right, level + 1);
    }
    if (right) {
      node(right.value, right.left, right.right, level + 1);
    }
  }

  function concat(value, level) {
    if (arrayFromTreee[level] instanceof Array) {
      arrayFromTreee[level].push(value);
    } else {
      arrayFromTreee[level] = [value];
    }
  }
};
