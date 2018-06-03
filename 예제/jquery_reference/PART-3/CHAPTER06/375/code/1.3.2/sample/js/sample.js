$(document).on("pageinit", "#mainPage", function(){
  var ele = document.getElementById("myMap");  // 지도의 표시되는 곳의 요소
  var map = new google.maps.Map(ele, {  // 지도 표시
    zoom : 17,  // 줌 레벨지정
    mapTypeId : google.maps.MapTypeId.ROADMAP,  // 일반적인 지도
    center : new google.maps.LatLng(37.548612, 126.955083)  // 중심의 경위도
  });
});