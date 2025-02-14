const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names){
  
  if(!Array.isArray(names)){
    return false
  }
  let secretNameOfTeam = "";
  // names = names.trim();
  for(let i = 0; i < names.length; i++){
      let currentNameOfArray = names[i];

      if(typeof currentNameOfArray === "string"){
          secretNameOfTeam += currentNameOfArray.trim().slice(0,1).toUpperCase();
      }
  }
  // console.log(secretNameOfTeam)
  return secretNameOfTeam.split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
