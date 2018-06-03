$(function(){
  // 수 생성 테스트 결과 대입
  var a = new Number(5963);
  var flag1 = $.isNumeric(a);
  // 지수 형식으로 지정, 테스트 결과 대입
  var b = 3.14e2;
  var flag2 = $.isNumeric(b);
  // Number 생성 테스트 결과 대입
  var c = new Number();
  var flag3 = $.isNumeric(c);
  // Function 생성 테스트 결과 대입
  var d = new Function();
  var flag4 = $.isNumeric(d);
  // 양의 무한대 생성 테스트 결과 대입
  var e = Infinity;
  var flag5 = $.isNumeric(e);
  // 결과 출력
  $("output:first").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+
    "<br>d："+flag4+"<br>e："+flag5);
});