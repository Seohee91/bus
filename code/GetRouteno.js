var CITYCODES = require("./lib/cityinfo");

//FindCitycodes
module.exports.function = function getRouteno (cityname,routeno) {
for(var i=0;i<CITYCODES.length;i++){
  if(CITYCODES[i].cityname==cityname){
    var citycode=CITYCODES[i].citycode
  }
}  

  var http=require('http')
  var console=require('console')
  var result
  var resultlist
 var testURL = "http://openapi.tago.go.kr/openapi/service/BusRouteInfoInqireService/getRouteNoList?serviceKey=GXKXmg7%2BDn7HkBFlQg3w7pRmYdrL88lqhnHD9urslLWelRYi4%2BeQ0f4MP7qXI8CULyYWq1T41IVYQMQ3ocGIhw%3D%3D&cityCode="+citycode+"&routeNo="+routeno
  
   var testResult = http.getUrl(testURL, {format: 'xmljs'});
   result= testResult.response.body.items.item.routeid
  return result;
}
