$(function(){
  // Window 오브젝트인지 확인한 결과 대입
  var a = window
  var flag1 = $.isWindow(a);
  // 오브젝트 생성 테스트 결과 대입
  var b = new Object();
  var flag2 = $.isWindow(b);
  // 결과 출력
  $("#result").html("a："+flag1+"<br>b："+flag2);
});