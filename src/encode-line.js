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
  let res = {};
  let resString = "";
  for(let i = 0; i < str.length; i++){
      if(res[str[i]]){
          res[str[i]]+=1;
      }else{
          res[str[i]]=1;
      }
      
  }
  let x = Object.entries(res);
  for([key, value] in x ){
      resString += value + key;
  }

return resString.split("1").join("")
}


module.exports = {
  encodeLine
};
