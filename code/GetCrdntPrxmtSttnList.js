
module.exports.function = function getCrdntPrxmtSttnList (point) {
  var http=require('http')
  var console=require('console')
 var result = [];
  
 var testURL = 'http://openapi.tago.go.kr/openapi/service/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=GXKXmg7%2BDn7HkBFlQg3w7pRmYdrL88lqhnHD9urslLWelRYi4%2BeQ0f4MP7qXI8CULyYWq1T41IVYQMQ3ocGIhw%3D%3D&gpsLati='+point.latitude+'&gpsLong='+point.longitude;
// var testURL = 'http://openapi.tago.go.kr/openapi/service/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=GXKXmg7%2BDn7HkBFlQg3w7pRmYdrL88lqhnHD9urslLWelRYi4%2BeQ0f4MP7qXI8CULyYWq1T41IVYQMQ3ocGIhw%3D%3D&gpsLati=35.888836&gpsLong=128.61029970000004';
  var testResult = http.getUrl(testURL, {format: 'xmljs'});
  //console.log(testResult.response.body.items.item);
  result= testResult.response.body.items.item
  return result;
}
