const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n=1;    
let resStr="";
for(let i=0; i <str.length; i++){
if(str[i] == str[i+1]){
n+= 1;
} else{
resStr+= n+str[i];
n= 1;
}
}
return resStr.split("1").join("");

//let res = {};//почему-то не прошло решение первое!
// let resString = "";
// for (let i = 0; i < str.length; i++) {
//     if (res[str[i]]) {
//         res[str[i]] += 1;
//     } else {
//         res[str[i]] = 1;
//     }
// }
// let x = Object.entries(res);
// for ( [key, value] of x) {
//   if(value === "1"){
//     resString += key;
//   }else{
//     resString += value+key;
//   }
// }
//return resString
}

module.exports = {
  encodeLine
};
