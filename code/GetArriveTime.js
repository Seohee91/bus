var CITYCODES = require("./lib/cityinfo");
module.exports.function = function getArriveTime (cityname,nodenm,routeno) {
//citycode구하기  
 for(var i=0;i<CITYCODES.length;i++){
  if(CITYCODES[i].cityname==cityname){
    var citycode=CITYCODES[i].citycode
  }
 }
  var http=require('http')
  var console=require('console') 
  
//routeid가져오기
 var getRouteidurl = "http://openapi.tago.go.kr/openapi/service/BusRouteInfoInqireService/getRouteNoList?serviceKey=GXKXmg7%2BDn7HkBFlQg3w7pRmYdrL88lqhnHD9urslLWelRYi4%2BeQ0f4MP7qXI8CULyYWq1T41IVYQMQ3ocGIhw%3D%3D&cityCode="+citycode+"&routeNo="+routeno
  
 var getRouteid = http.getUrl(getRouteidurl, {format: 'xmljs'});
var routeid=getRouteid.response.body.items.item.routeid

 //nodeid가져오기

  var getNodeidurl = "http://openapi.tago.go.kr/openapi/service/BusRouteInfoInqireService/getRouteAcctoThrghSttnList?serviceKey=GXKXmg7%2BDn7HkBFlQg3w7pRmYdrL88lqhnHD9urslLWelRYi4%2BeQ0f4MP7qXI8CULyYWq1T41IVYQMQ3ocGIhw%3D%3D&numOfRows=200&pageNo=1&cityCode="+citycode+"&routeId="+routeid


var getNodeidlist = http.getUrl(getNodeidurl, {format: 'xmljs'});

var getArray = getNodeidlist.response.body.items.item;

  for(var i=0;i<getArray.length;i++){
  if(getArray[i].nodenm==nodenm){
    var nodeid=getArray[i].nodeid
  }
 }

//arriveT 구하기 
  
var getArriveTurl ="http://openapi.tago.go.kr/openapi/service/ArvlInfoInqireService/getSttnAcctoSpcifyRouteBusArvlPrearngeInfoList?cityCode="+citycode+"&nodeId="+nodeid+"&routeId="+routeid+"&ServiceKey=5%2FnLWyBhy7KZM5ChNoeBpWuTi8ZDlzgmh%2Buwe%2BfNTdcke3Ujn59AESko%2BitRMDap52HA4W7JvKPj8ugWF602QA%3D%3D"
  
var getArriveT = http.getUrl(getArriveTurl, {format: 'xmljs'});
var arriveT=getArriveT.response.body.items.item.arrtime

var preStn=getArriveT.response.body.items.item.arrprevstationcnt

var arriveinfo={
  "arriveT":arriveT,
  "preStn":preStn
}

  return arriveinfo
}
