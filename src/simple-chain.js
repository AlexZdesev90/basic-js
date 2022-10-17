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
  //position - 1;//index
  let lengthRes = this.res.length;
if(+position && position >= 1 && position <= lengthRes){
    this.res.splice(position-1, 1)
    return this
}

else{
  this.res = []
  throw new Error("You can\'t remove incorrect link!")
}},
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
