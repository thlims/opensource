$(function(){
  // Array 생성 배열 테스트 결과 대입
  var a = new Array();
  var flag1 = $.isArray(a);
  // Object 생성 배열 테스트 결과 대입
  var b = new Object();
  var flag2 = $.isArray(b);
  // Number 생성 배열 테스트 결과 대입
  var c = new Number();
  var flag3 = $.isArray(c);
  // 결과 출력
  $("#result").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3);
});