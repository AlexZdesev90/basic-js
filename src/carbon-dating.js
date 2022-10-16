const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" ) return false;
    str = +sampleActivity;
    if(str <= 0) return false;

     //tests
     // dateSample('9000'), false);
    // dateSample('15.1'), false);
    // dateSample('0'), false);
    //dateSample('-5'), false);
    //dateSample('-55.8'), false);
    
    const k =0.693/HALF_LIFE_PERIOD;
    
    let t = (Math.log(MODERN_ACTIVITY/str))/k;
    if(isNaN(t) || t === Infinity ) return false;
    return Math.ceil(t)
}

module.exports = {
  dateSample
};
