const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
    
getLength() {
  return this.res.length;
},
addLink(value){
  if(!value){
  this.res.push("( )");
  }
  this.res.push([`( ${value} )`])
  return this
},
removeLink( position ) {
  pos = position - 1;//index
if(pos === 0){
  this.res.splice(pos, 1)
}
else{
  res = []
  throw new Error("You can't remove incorrect link!")
}
return this
},
reverseChain() {
  this.res.reverse();
  // console.log(res)
  // console.log(chainMaker)
  return this
},
finishChain() {
  let finishEl = this.res.join("~~");
  this.res = []
  return finishEl;
}
};


module.exports = {
  chainMaker
};
