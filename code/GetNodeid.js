module.exports.function = function getNodeid (nodenm,routeid,citycode) {
  var http=require('http')
  var console=require('console')
  
  var getNodeidurl = "http://openapi.tago.go.kr/openapi/service/BusRouteInfoInqireService/getRouteAcctoThrghSttnList?serviceKey=GXKXmg7%2BDn7HkBFlQg3w7pRmYdrL88lqhnHD9urslLWelRYi4%2BeQ0f4MP7qXI8CULyYWq1T41IVYQMQ3ocGIhw%3D%3D&numOfRows=200&pageNo=1&cityCode="+citycode+"&routeId="+routeid


var getNodeidlist = http.getUrl(getNodeidurl, {format: 'xmljs'});

var getArray = getNodeidlist.response.body.items.item;

  for(var i=0;i<getArray.length;i++){
  if(getArray[i].nodenm==nodenm){
    var nodeid=getArray[i].nodeid
  }
 }
  
  
  return nodeid
}
