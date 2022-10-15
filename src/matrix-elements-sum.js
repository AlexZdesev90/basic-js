const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let all = 0;
    for (let s = 0; s < matrix.length; s++) {
        for (let k = 0; k < matrix[s].length; k++) {
            if (matrix[s-1] && matrix[s-1][k] === 0 || matrix[s-2] && matrix[s-2][k] === 0 ) {
                // all += matrix[s][k];
            }else{
              all += matrix[s][k];
            }
        }
    }
    return all
}

module.exports = {
  getMatrixElementsSum
};
