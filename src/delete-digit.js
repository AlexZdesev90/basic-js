const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split("");
  console.log(array);
  let res = [];
  for(let i = 0; i<array.length; i++){
      let x = array.slice(0, i) + array.slice(i+1)
      res.push(+(x.split(",").join("")))
  }
  return Math.max(...res)
}

module.exports = {
  deleteDigit
};
