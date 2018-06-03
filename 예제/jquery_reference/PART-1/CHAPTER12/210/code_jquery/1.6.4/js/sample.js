$(function(){
  // 오브젝트를 생성하여 테스트 결과 대입
  var a = { }
  var flag1 = $.isPlainObject(a);
  // 오브젝트를 생성하여 테스트 결과 대입
  var b = new Object();
  var flag2 = $.isPlainObject(b);
  // 오브젝트(수)를 생성하여 테스트 결과 대입
  var c = new Object(39);
  var flag3 = $.isPlainObject(c);
  // 오브젝트를 생성하여 테스트 결과 대입
  var d = { e : 2.71, pi : 3.14 };
  var flag4 = $.isPlainObject(d);
  // 오브젝트를 생성하여 테스트 결과 대입
  var e = "JavaScript";
  var flag5 = $.isPlainObject(e);
  // 결과 출력
  $("output:first").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+
    "<br>d："+flag4+"<br>e："+flag5);
});