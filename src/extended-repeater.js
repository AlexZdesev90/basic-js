const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;

  addition = addition !== undefined ? addition : "";
  // separator = separator !== undefined ? separator : "";
  // additionRepeatTimes = additionRepeatTimes !== undefined ? additionRepeatTimes : 0;
  // additionSeparator = additionSeparator !== undefined ? additionSeparator : "";

  repeatTimes = repeatTimes !== undefined ? repeatTimes : 0;
  
  return ((str +(addition + additionSeparator).repeat(additionRepeatTimes - 1) +(addition))+separator).repeat(repeatTimes).slice(0,`${-separator.length}`)
}

module.exports = {
  repeater
};
