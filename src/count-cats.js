const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  for(let i = 0; i < matrix.length; i++){
      let currentElementOfMatrix = matrix[i];
      for(let k = 0; k < currentElementOfMatrix.length; k++){
          let currentElementOfArray = currentElementOfMatrix[k]
          if(currentElementOfArray === '^^'){
              count += 1;
          }
      }
  }
  return count;
}

module.exports = {
  countCats
};
