var CITYCODES = require("./lib/cityinfo.js");

//FindCitycodes
module.exports.function = function(cityname) {
  
for(var i=0;i<CITYCODES.length;i++){
  if(CITYCODES[i].cityname==cityname){
    var result=CITYCODES[i].citycode
  }
}  
  return result
 /*var result = CITYCODES.filter(function(cityinfo){
      return cityinfo.cityname == cityname 
    })
   
    return result*/
}
