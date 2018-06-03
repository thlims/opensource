$(function(){
  // 함수 생성 테스트 결과 대입
  var a = function(){ var i = 4649; }
  var flag1 = $.isFunction(a);
  // b에 a의 참조를 넣은 후 테스트 결과 대입
  var b = a;
  var flag2 = $.isFunction(b);
  // Number 생성 테스트 결과 대입
  var c = new Number();
  var flag3 = $.isFunction(c);
  // Function 생성 테스트 결과 대입
  var d = new Function();
  var flag4 = $.isFunction(d);
  // 결과 출력
  $("#result").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+"<br>d："+flag4);
});