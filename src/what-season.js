const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
    if(!(data)){
        return "Unable to determine the time of year!"
    }
    if(!(data instanceof Date) || Object.getOwnPropertyNames(data).length){
        throw new Error("Invalid date!");
    }
    // let resultDatat = new Date(data)
    // console.log(new Date().getMonth())
    let resultSeason = "";
    let month = data.getMonth().toString();
    if(month === "2" || month === "3" || month === "4"){
        resultSeason = "spring";
    }else if(month === "5" || month === "6" || month === "7"){
        resultSeason = "summer";
    }else if(month === "8" || month === "9" || month === "10"){
        resultSeason = "autumn";
    }else if(month === "11" || month === "0" || month === "1"){
        resultSeason = "winter";
    }
    return resultSeason;
}


module.exports = {
  getSeason
};
