const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // let n = [[],[],[]];
  let n = [];
  // n[0] = [];
  // n[1] = [];
  // n[2] = [];
    for (var i = 0; i < matrix.length; i++) {
      n[i] = []
    for (var k = 0; k < matrix[i].length; k++) {

    let count = 0;
// console.log(matrix[i - 1][k - 1])
// console.log(matrix[i - 1][k])
// console.log( matrix[i - 1][k + 1])
// console.log(matrix[i][k - 1])
// console.log(matrix[i - 1][k - 1])
    if (  matrix[i - 1] &&   matrix[i - 1][k - 1]   ){
    count+=1}
    if (  matrix[i - 1] &&  matrix[i - 1][k]   ){
    count+=1}
    if (  matrix[i - 1] &&   matrix[i - 1][k + 1]  ){
    count+=1}
    if (  matrix[i][k - 1]  ){
    count+=1}
    if (    matrix[i][k + 1]  ){
    count+=1}
    if (  matrix[i + 1] && matrix[i + 1][k - 1]   ){
    count+=1}
    if (  matrix[i + 1]   && matrix[i + 1][k] ){
    count+=1}
    if (  matrix[i + 1] && matrix[i + 1][k + 1]   ){
    count+=1}

n[i][k] = count;
}}
    return n;
}

module.exports = {
  minesweeper
};
