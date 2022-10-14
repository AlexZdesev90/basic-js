const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  let res = JSON.parse(JSON.stringify(arr))
  if(res = []){
    return [];
}
    for(let i = 0; i < res.length; i++){
        if(res[i] === "--double-next"){
            res[i] = res[i+1];
            return res
        }else if(res[i] === "--double-prev"){
            res[i] = res[i-1];
            return res
        }else if(res[i] === "--discard-next"){
            res[i] = "0";
            res[i+1] = "0";
            // console.log(res)
            return res.filter(el => el !== "0")
        }else if(res[i] === "--discard-prev"){
            res[i] = "0";
            res[i-1] = "0";
            // console.log(res)
            return res.filter(el => el !== "0")
        }
    }
}

module.exports = {
  transform
};
