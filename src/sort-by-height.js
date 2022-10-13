const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let num = arr;
  num = num.filter((current) => current !== -1)
  num.sort((a,b) => a-b)
  let index = 0;
  for(let k = 0; k < arr.length; k++){
      if(arr[k] !== -1){
      arr[k] = num[index]
          index+=1
      }
  }
  return arr
}

module.exports = {
  sortByHeight
};
